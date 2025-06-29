import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "" ;
    } , [menuOpen]);

    return  (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="flex items-center">
                    <img 
                    src="./fakhri.jpg" 
                    alt="logo" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-blue-500 transition-colors duration-500"
                    />
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Home{" "}
                    </a>

                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        About{" "}
                    </a>

                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Projects{" "}
                    </a>

                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        {" "}
                        Contact{" "}
                    </a>

                    <a
                        href="/Fakhri_portfolio/_cv_.pdf"
                        download="Fakhri_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Download CV
                    </a>
                </div>

            </div> 
        </div>
    </nav>
    );
};