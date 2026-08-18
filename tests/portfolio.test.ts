import { describe, expect, it } from "vitest";
import { categories, portfolioItems } from "../src/data/portfolio";

describe("portfolio archive", () => {
  it("uses unique, ordered identifiers and slugs", () => {
    expect(new Set(portfolioItems.map((item) => item.id)).size).toBe(portfolioItems.length);
    expect(new Set(portfolioItems.map((item) => item.slug)).size).toBe(portfolioItems.length);
    expect(portfolioItems.map((item) => item.id)).toEqual(["001", "002", "003", "004", "005", "006", "007", "008"]);
  });

  it("contains only supported categories and complete evidence metadata", () => {
    for (const item of portfolioItems) {
      expect(categories).toContain(item.category);
      expect(item.summary.length).toBeGreaterThan(40);
      expect(item.sections.length).toBeGreaterThan(0);
      expect(item.evidence.length).toBeGreaterThan(0);
      for (const evidence of item.evidence) {
        expect(["PUBLIC", "REDACTED", "SUMMARY ONLY", "PRIVATE"]).toContain(evidence.access);
      }
    }
  });

  it("includes every assignment-critical component in the work-term entry", () => {
    const entry = portfolioItems.find((item) => item.slug === "knowledge-retrieval-prototype");
    expect(entry).toBeDefined();
    expect(entry?.date).toContain("Updated August 2026");
    expect(entry?.sections.some((section) => section.heading === "Entry annotation")).toBe(true);
    expect(entry?.sections.some((section) => section.heading === "Reflection")).toBe(true);
    expect(entry?.evidence.some((evidence) => evidence.access === "PUBLIC")).toBe(true);
  });
});
