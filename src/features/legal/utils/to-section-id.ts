/**
 * Converts a heading into a URL fragment identifier.
 *
 * @param title - Visible section heading.
 * @returns Lowercase hyphenated id.
 */
export const toSectionId = (title: string): string =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
