import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    
    const frontendSkills = ["React" , "Vue" , "Tailwincss" ,"Node.js" , "Python" , "MongoDB" , "UX/UI" , "AI" , "HTML" , "CSS" , "JavaScript" , "Python" , "Java" , "c/c++" , "SQL" , "NumPy" , "TensorFlow" , "NLP" , "GIT/GITHUB" , "PyTorch"];
    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a second-year Software Engineering student at the National School of Computer Science (ENSI), 
                    driven by a deep passion for Artificial Intelligence, Machine Learning, and Embedded Systems. 
                    I am currently seeking a summer internship where I can apply and further develop my skills in these domains.
                    My academic journey has equipped me with a strong foundation in core computer science concepts, 
                    complemented by hands-on experience gained through diverse projects and coursework. I am particularly 
                    enthusiastic about harnessing the power of AI, machine learning, and embedded systems to address real-world 
                    challenges. Eager to collaborate on innovative solutions, I am ready to contribute my skills, curiosity, 
                    and determination to forward-thinking teams.
                </p>
                
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech , key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>National School of Computer Science (ENSI)</strong> <br />Computer Science Engineering Diploma <br /> 2023 - 2026
                        </li>
                        <br />
                        <li>
                            <strong>Faculty of Sciences of Monastir (FSM)</strong><br />Engineering preparatory school Diploma <br /> 2021 - 2023
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-4"> 💼 Experience</h3> 
                    <div className="space-y-4 text-gray-300">
                        <h4 className="font-semibold">SWConsulting , Software Engineer Intern</h4>
                        <p className="text-sm text-muted-foreground">Aug 2024 – Sep 2024 | Monastir, Bouhjar</p>
                        <h5>- developed a reusable web component library
                        using React, Tailwind CSS, and Figma to improve UI development efficiency</h5>
                    </div>
                </div>
            </div>
        </div>   
        </RevealOnScroll>     
    </section>
    );
};