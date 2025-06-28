import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll > 
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Factify</h3>
                        <p className="text-gray-400 mb-4">
                            Development of a fake news detection system that allows users to submit a 
                            link for analysis, automatically extracts content using web scraping, 
                            and determines the reliability of the information in real-time using a 
                            Transfer Learning model.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.js" , "AI" , "node.js" , "fastAPI" , "Transformers" ,"WebScraping" ].map((tech , key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fakhreddine2002/pcd-.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➝</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Reusable Component Library (Internship at SWConsulting)</h3>
                        <p className="text-gray-400 mb-4">
                            Development of a reusable web component library to accelerate front-end development. Built an interactive preview system with a sidebar for component navigation, ensuring consistency, scalability, and ease of integration across web projects.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Vue" , "MongoDB" ,"Node.js" , "ComponentLibrary" ].map((tech , key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fakhreddine2002/SW-app.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➝</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Educational Platform – Full-Stack Web Development</h3>
                        <p className="text-gray-400 mb-4">
                            Development of a web platform that allows students to register for preparatory classes (MP, PC, or PT) or as teachers, search for courses based on the selected section, and access educational resources tailored to each cycle.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML/CSS", "PHP","Javascript", "FullStack" ,"WebDevelopment" ,"EducationTech" ].map((tech , key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fakhreddine2002/Web-Project.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➝</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">E-Bus Travel – Car and Bus Rental Application</h3>
                        <p className="text-gray-400 mb-4">
                            Development of a rental application that allows users to book a bus for travel, rent a car, and view or edit details of available vehicles.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["c" , "CarRental" ,"BusRental"].map((tech , key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/fakhreddine2002/programme-d-allocation-de-voiture.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➝</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};