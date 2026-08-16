interface JsonLdProps {
    data: object;
}

/**
 * Renders a JSON-LD script tag from a serializable object.
 *
 * @param data - Structured data payload.
 */
export const JsonLd = ({ data }: JsonLdProps) => (
    <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as a script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        type="application/ld+json"
    />
);
