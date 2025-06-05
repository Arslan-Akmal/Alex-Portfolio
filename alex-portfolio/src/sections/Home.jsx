export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 tansition-colors duration-300 px-4 text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
        Hi I'm Alex Carter
      </h1>
      <h2 className="text-lg text-gray-800 dark:text-gray-200 mb-4">
        A creative graphic designer crafting clean and impactful designs.
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6">
        With 5+ years of experience, I help clients build strong visual identities through logos,
        branding, UI/UX, and digital illustrations. Let’s bring your ideas to life!
      </p>
      <a
        href="#projects"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
