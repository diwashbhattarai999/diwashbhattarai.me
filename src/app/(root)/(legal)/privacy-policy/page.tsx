import { ROUTES } from "@/configs/routes";
import { LegalDocumentPage } from "@/features/legal/components/legal-document-page";
import { PRIVACY_POLICY } from "@/features/legal/constants/privacy-policy.constants";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
    description: PRIVACY_POLICY.description,
    path: ROUTES.PRIVACY_POLICY,
    title: `${PRIVACY_POLICY.title} | Diwash Bhattarai`,
});

export default function Page() {
    return <LegalDocumentPage document={PRIVACY_POLICY} path={ROUTES.PRIVACY_POLICY} />;
}
