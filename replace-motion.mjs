import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('components');
let replacedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Regex to match framer-motion imports
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+["']framer-motion["']/g;
  
  let modified = false;
  content = content.replace(importRegex, (match, p1) => {
    // Only replace if 'motion' is imported and 'm as motion' is NOT there
    if (/\bmotion\b/.test(p1) && !/\bm\s+as\s+motion\b/.test(p1)) {
      modified = true;
      const newP1 = p1.replace(/\bmotion\b/g, 'm as motion');
      return `import { ${newP1} } from "framer-motion"`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced in ${file}`);
    replacedCount++;
  }
});

console.log('Total files replaced: ' + replacedCount);
