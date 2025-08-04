/**
 * @copyright 2025 aashnasahu
 * @license Apache-2.0 
 */


const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hi, I'm Aashna — a tech enthusiast with a passion for 
                    problem-solving and analytical thinking. I'm in my third year 
                    of B.Tech at IIT Hyderabad, exploring and growing in the fields 
                    of web development and data analytics. I enjoy building meaningful 
                    projects, learning new technologies, and continuously expanding 
                    my skill set to solve real-world problems.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    <img 
                    src="src\images\logo-2.png" 
                    alt="Logo" 
                    width={30}
                    height={30}
                    className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About