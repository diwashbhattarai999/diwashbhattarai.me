import { ROUTES } from "@/configs/routes";
import { LegalDocumentPage } from "@/features/legal/components/legal-document-page";
import { TERMS_AND_CONDITIONS } from "@/features/legal/constants/terms.constants";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description: TERMS_AND_CONDITIONS.description,
    path: ROUTES.TERMS,
    title: `${TERMS_AND_CONDITIONS.title} | Diwash Bhattarai`,
});

export default function Page() {
    return <LegalDocumentPage document={TERMS_AND_CONDITIONS} path={ROUTES.TERMS} />;
}
