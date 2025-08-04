/**
 * @copyright 2025 aashnasahu
 * @license Apache-2.0 
 */

const Hero = () => {
  return (
    <>
    <section 
    id="home"
    className="pt-28 lg:pt-36"
    >
        <div className="container lg:grid lg:grid-cols-2 
        items-center lg:gap-10">
            <div>
            <div className="flex items-center gap-3">
                <figure className="img-box w-9 h-9 rounded-lg">
                    <img src="src\images\logo-2.png" 
                    width={40}
                    height={40}
                    alt="Aashna Sahu Portrait" 
                    className="img-cover" />
                </figure>

                <div className="flex items-center gap-1.5 text-zinc-400
                text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                    </span>

                    Available for work
                </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                In a constant loop of curiosity → learning → execution.
            </h2>

            <div className="">
                Button Primary
                Button Outline
            </div>

            </div>

            <div className="hidden lg:block">
                <figure className="">
                    <img 
                        src="src\images\Hero-banner.jpg" 
                        width={656}
                        height={800}
                        alt="Hero Banner" 
                        className="w-full" 
                    />
                </figure>
            </div>


        </div>

    </section>
    </>
  )
}

export default Hero