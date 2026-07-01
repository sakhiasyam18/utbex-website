// src/sections/about/types/about.ts

export interface AboutContentData {
  headline: string;
  story: {
    id: string;
    text: string;
  }[];
  quote: {
    text: string;
    author: string;
  };
  image: {
    src: string;
    alt: string;
  };
}