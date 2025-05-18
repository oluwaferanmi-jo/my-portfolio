function About() {
  return (
    <div className="bg-gray-900 py-16 text-white">
      <h2 className="text-center text-4xl font-semibold">About Me</h2>
      <p className="text-center text-sm text-gray-400 mt-2">
        User Interface And User Experience And Also Video Editing
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12 px-8 md:px-20 gap-12">
       {/* Left - Image with circular gradient background */}
<div className="w-full md:w-[40%] flex justify-center items-center">
  <div className="relative w-70 h-70 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
    {/* Circular Gradient Background */}
    <div className="w-full h-full bg-gradient-to-r from-[#ae1703d2] to-[#9d4d10] rounded-full"></div>

    {/* Centered Image Using Flex Instead of Absolute */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="/Elegbede.jpeg"
        alt="Elegbede Oluwaferanmi"
        className="w-65 h-65 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
      />
    </div>
  </div>
</div>

        {/* Right - Text */}
        <div className="w-full md:w-[50%] text-gray-300">
          <p className="leading-7 tracking-wide">
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs...
          </p>

          <button className="mt-6 bg-orange-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-orange-600 transition duration-300">
            ⬇️ Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
