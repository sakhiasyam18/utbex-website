// components/section/portfolio/utils/portfolioHelpers.ts
import { PortfolioProject } from "../types/portfolio";

/**
 * Extracts the featured project (the first one marked as featured)
 */
export function getFeaturedProject(projects: PortfolioProject[]): PortfolioProject | undefined {
  return projects.find((project) => project.isFeatured);
}

/**
 * Returns a subset of selected stories, excluding the main featured project if requested.
 * We'll use this for Chapter 03 (Selected Stories), expecting 3 stories.
 */
export function getSelectedStories(projects: PortfolioProject[], count: number = 3, excludeId?: string): PortfolioProject[] {
  return projects
    .filter((project) => project.id !== excludeId)
    .slice(0, count);
}

/**
 * Returns the remaining projects for Chapter 04 (Project Mosaic).
 */
export function getMosaicProjects(projects: PortfolioProject[], excludeIds: string[]): PortfolioProject[] {
  return projects.filter((project) => !excludeIds.includes(project.id));
}
