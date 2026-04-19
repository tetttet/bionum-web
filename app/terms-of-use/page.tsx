import type { Metadata } from "next";

import {
  LegalDocumentPage,
  resolveLegalPlatform,
} from "../legal-document";
import { termsOfUseContent } from "../legal-content";

export const metadata: Metadata = {
  title: "Terms of Use | BioNum",
};

type TermsOfUsePageProps = {
  searchParams: Promise<{
    platform?: string | string[] | undefined;
  }>;
};

export default async function Page({ searchParams }: TermsOfUsePageProps) {
  const platform = resolveLegalPlatform((await searchParams).platform);

  return (
    <LegalDocumentPage
      basePath="/terms-of-use"
      title="Terms of Use"
      platform={platform}
      documents={termsOfUseContent}
    />
  );
}
