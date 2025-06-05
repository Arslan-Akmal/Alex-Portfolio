export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-10">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-100">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-100">
            Email
          </label>
          <input
            type="text"
            placeholder="you@example.com"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-100">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
