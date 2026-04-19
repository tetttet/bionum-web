import Link from "next/link";

import { LegalDocumentSet, LegalPlatform } from "./legal-content";

const tabLabels: Record<LegalPlatform, string> = {
  ios: "iOS",
  android: "Android",
};

const orderedPlatforms: LegalPlatform[] = ["ios", "android"];

export const resolveLegalPlatform = (
  value?: string | string[],
): LegalPlatform => {
  const platform = Array.isArray(value) ? value[0] : value;

  return platform === "android" ? "android" : "ios";
};

type LegalDocumentPageProps = {
  basePath: string;
  title: string;
  platform: LegalPlatform;
  documents: LegalDocumentSet;
};

export function LegalDocumentPage({
  basePath,
  title,
  platform,
  documents,
}: LegalDocumentPageProps) {
  const document = documents[platform];

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-10 sm:px-8">
        <nav className="mx-auto mb-10 flex w-full max-w-xs border border-black">
          {orderedPlatforms.map((tab, index) => (
            <Link
              key={tab}
              href={{ pathname: basePath, query: { platform: tab } }}
              replace
              className={[
                "flex-1 px-4 py-3 text-center text-sm font-medium",
                index === 0 ? "border-r border-black" : "",
                tab === platform ? "bg-black text-white" : "bg-white text-black",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {tabLabels[tab]}
            </Link>
          ))}
        </nav>

        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-10 space-y-2 text-center">
            <p className="text-sm font-medium">{document.platformTitle}</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {document.effectiveDate ? (
              <p className="text-sm">{document.effectiveDate}</p>
            ) : null}
          </header>

          <div className="space-y-8 text-left text-sm leading-7 sm:text-base">
            {document.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold sm:text-xl">
                  {section.title}
                </h2>

                <div className="mt-3 space-y-3">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets?.length ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
