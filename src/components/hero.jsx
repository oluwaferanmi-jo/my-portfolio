function Hero() {
  return (

    <section className="w-full bg-gray-900 overflow-x-hidden min-h-[750px] md:min-h-screen flex items-start lg:items-center md:item- mt-8">
      
      
      <div className="w-full container mt-8 px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        
        {/* LEFT: text */}
        <div className="flex-1 space-y-4 text-left lg:text-left">
          <p className="text-white text-lg">Hi there! I am</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Elegbede Oluwaferanmi
            <br />
            <span
              className="block text-2xl md:text-3xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #FA6E00 30%, #E60026 70%)',
              }}
            >
              Frontend Developer
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Passionate about creating intuitive interfaces and delightful user experiences.
          </p>
          <div className="mt-6 flex flex-row sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4">
            <button className="w-[40%] sm:w-auto bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white px-6 py-2 rounded">
              Hire Me
            </button>
            <button className="w-[40%] sm:w-auto border border-amber-500 text-white hover:bg-amber-500 hover:text-white px-6 py-2 rounded">
              Download CV
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
            {[
              ["5+", "Years Experience"],
              ["20+", "Projects"],
              ["30+", "Happy Clients"],
            ].map(([num, label]) => (
              <div key={label} className="text-white text-center lg:text-left">
                <p className="text-2xl font-semibold">{num}</p>
                <p className="text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="relative flex-shrink-0">
         
<div
  className="
    absolute
      top-1/2 left-1/2
      transform -translate-x-1/2 -translate-y-1/2
      mt-30

    lg:left-auto lg:right-0 lg:translate-x-0 lg:mt-45

    z-0
  "
>
  
  <div className="relative">
    
    <div
      className="
        w-64 h-64
        md:w-80 md:h-80
        lg:w-100 lg:h-100
        bg-gradient-to-r from-[#ae1703d2] to-[#9d4d10]
        rounded-full
      "
    ></div>

    
    <img
      src="/Elegbede.jpeg"
      alt="Elegbede Oluwaferanmi"
      className="
        absolute
          top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2

        w-60 h-60
        sm:w-56 sm:h-56
        md:w-64 md:h-64
        lg:w-80 lg:h-80

        object-cover
        rounded-full
      "
    />
  </div>
</div>

         
        </div>
      </div>

    </section>
  );
}

export default Hero;
