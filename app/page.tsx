import Gradient from "./components/Gradient";
import ProfileTile from "./components/ProfileTile";
import ContactTile from "./components/ContectTile";
import SkillsTile from "./components/SkillsTile";
import ProjectsTile from "./components/ProjectsTile";
import ExperienceTile from "./components/ExperienceTile"

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-gray-100 text-black dark:bg-neutral-900 dark:text-gray-100">
      <Gradient className="top-0 left-0 h-96 w-48 bg-indigo-500/30 duration-500 dark:bg-blue-500/40" />
      <Gradient className="left-60 top-96 h-64 w-72 rounded-lg bg-blue-500/30  duration-700 dark:bg-indigo-500/40" />
      <Gradient className="right-96 bottom-60 h-60 w-60 rounded-lg bg-red-500/30 dark:bg-violet-500/30" />
      <Gradient className="right-0 bottom-0 h-48 w-96 rounded-full bg-orange-500/30 dark:bg-cyan-500/30" />

      <main className="flex grow flex-col justify-center">
        <section>
          <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-12">
              <ProfileTile className="sm:col-span-6 sm:row-span-2 lg:col-span-5" />
              <ContactTile className="sm:col-span-6 lg:col-span-3" />
              <SkillsTile className="sm:col-span-6 lg:col-span-4" />
              <ProjectsTile className="sm:col-span-6 lg:col-span-4" />
              <ExperienceTile className="sm:col-span-6 lg:col-span-3" />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-md py-10 text-center text-sm opacity-60">
        2024
      </footer>
    </div>
  );
}
