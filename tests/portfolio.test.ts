import { describe, expect, it } from "vitest";
import { categories, portfolioItems } from "../src/data/portfolio";

describe("portfolio archive", () => {
  it("uses unique, ordered identifiers and slugs", () => {
    expect(new Set(portfolioItems.map((item) => item.id)).size).toBe(portfolioItems.length);
    expect(new Set(portfolioItems.map((item) => item.slug)).size).toBe(portfolioItems.length);
    expect(portfolioItems.map((item) => item.id)).toEqual(["001", "002", "003", "004", "005", "006", "007", "008"]);
  });

  it("contains only supported categories and complete case-study content", () => {
    for (const item of portfolioItems) {
      expect(categories).toContain(item.category);
      expect(item.summary.length).toBeGreaterThan(40);
      expect(item.sections.length).toBeGreaterThan(0);
      expect(item.sections.every((section) => section.heading.length > 0)).toBe(true);
    }
  });

  it("maps each available work image to its archive entry", () => {
    expect(portfolioItems.filter((item) => item.image).map((item) => item.slug)).toEqual([
      "codeclash-platform",
      "teaching-university-of-toronto",
      "oral-examinations-research",
      "finch-flight-software",
      "robotics-instruction"
    ]);
  });

  it("includes every assignment-critical component in the work-term entry", () => {
    const entry = portfolioItems.find((item) => item.slug === "knowledge-retrieval-prototype");
    expect(entry).toBeDefined();
    expect(entry?.date).toContain("Updated August 2026");
    expect(entry?.sections.some((section) => section.heading === "Entry annotation")).toBe(true);
    expect(entry?.sections.some((section) => section.heading === "Reflection")).toBe(true);
    expect(entry?.sections.find((section) => section.heading === "Entry annotation")?.paragraphs.join(" ").split(/\s+/).length).toBeGreaterThan(200);
  });
});
