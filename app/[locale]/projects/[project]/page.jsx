import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Header from "@/app/[locale]/projects/components/header";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { project } = await params;

  const t = await getTranslations(`Project.${project}`);
  const tProject = await getTranslations("Project");
  const repositories = t.raw("projectRepos");

  return (
    <main>
      <Cursor/>
      <Header/>
      <section className=" responsive-container pt-25 pb-15 space-y-2.5">
        <Link href={"/projects"}>
          <svg
              width="38" 
              height="38" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="stroke-[#7C2D12]">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </Link>
        <h1 className="title text-center">{t("projectTitle")}</h1>
        <Image src={t("projectIMG")} width={700} height={400} alt={t("projectTitle")} className="mx-auto rounded-2xl" />
        <p className="text">{t("projectDesc1")}</p>
        <p className="text">{t("projectDesc2")}</p>
        <p className="text">{t("projectDesc3")}</p>
        <p className="text">{t("projectDesc4")}</p>
        {repositories.length > 0 && (
          <div className="pt-4">
            <h2 className="subtitle">{tProject("repositoriesTitle")}</h2>
            <ul className="flex flex-wrap gap-4">
              {repositories.map((repository) => (
                <li key={repository.url}>
                  <a
                    href={repository.url}
                    className="text-base sm:text-lg font-Inter text-(--color-secondary) font-semibold hover:text-amber-950 transition-colors duration-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repository.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <Contact/>
    </main>
  );
}