const projects = [
    {
        id: 1,
        title: "Brand Identity Design",
        description: "Logo and branding package for a modern startup.",
        image: "https://media.istockphoto.com/id/1140385944/photo/books-of-advertising-and-branding-in-front-grey-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=dzvSuYx_C-R1iHYKPC8JsNDzPwRfxsWFrkMxBCb7hFs=",
    },
    {
        id: 2,
        title: "Mobile App UI/UX",
        description: "Clean and minimal UI for a food delivery app.",
        image: "https://plus.unsplash.com/premium_photo-1720025910347-6286f827471d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9iaWxlJTIwQXBwJTIwVUklMkZVWHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3, 
        title: "Social Media Compaign",
        description: "Creative visuals and layout for a marketing compaign.",
        image: "https://plus.unsplash.com/premium_photo-1718859039749-e58c476fa9b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29jaWFsJTIwTWVkaWElMjBDb21wYWlnbnxlbnwwfHwwfHx8MA%3D%3D",  
    },
    {
    id: 5,
    title: "Illustration Work",
    description: "Custom illustrations for a children’s book.",
    image: "https://media.istockphoto.com/id/1328222864/vector/new-york-city-skyline.webp?a=1&b=1&s=612x612&w=0&k=20&c=QKYmEJ2LcjdPpr9wahG8oTdVuHZbuee3-d893kxQUlU=",
  },
];

export default function Projects() {
return (
    <section 
    id="projects" 
    className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration 300"
    >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-10">
            My Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {projects.map((project) => (
                <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all duration-300"
                >
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {project.description}
                        </p>
                    </div>    
                </div>
            ))}
        </div>
    </section>
);
}
