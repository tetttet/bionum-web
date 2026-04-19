import type { Metadata } from "next";

import {
  LegalDocumentPage,
  resolveLegalPlatform,
} from "../legal-document";
import { privacyPolicyContent } from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | BioNum",
};

type PrivacyPolicyPageProps = {
  searchParams: Promise<{
    platform?: string | string[] | undefined;
  }>;
};

export default async function Page({
  searchParams,
}: PrivacyPolicyPageProps) {
  const platform = resolveLegalPlatform((await searchParams).platform);

  return (
    <LegalDocumentPage
      basePath="/privacy-policy"
      title="Privacy Policy"
      platform={platform}
      documents={privacyPolicyContent}
    />
  );
}
