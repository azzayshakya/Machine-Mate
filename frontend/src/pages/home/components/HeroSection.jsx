const HeroSection = () => {
  return (
    <div className="relative   bg-gradient-to-br from-gray-50 to-white shadow-xl">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 left-20 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
        
        <div className="absolute top-32 right-1/3 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-cyan-200 rounded-full opacity-40 animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-yellow-200 rounded-full opacity-50 animate-bounce" style={{animationDuration: '2.5s'}}></div>
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left  */}
          <div className="space-y-8">
            <h1 className="lg:text-6xl text-5xl font-bold leading-tight text-gray-900">
              Let customers help themselves faster with a 
              smarter Knowledge Base.
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-info font-medium ">
              Thinking about having an online documentation or support system
              for your product? Docbuzz have everything you need to develop your
              own help center.
            </p>

            <button className="transform rounded-lg border-2 border-cyan-500 px-8 py-3 text-lg text-cyan-500 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white">
              Explore Demo
            </button>
          </div>

          {/* Right Content - Product Screenshots */}
          <div className="relative">
            <div className="absolute left-0 top-20 z-20 rotate-6 transform transition-transform duration-500 hover:rotate-3">
              <div className="min-h-40 w-64 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 shadow-2xl">hyy</div>
            </div>

            <div className="absolute right-0 top-20 z-10 -rotate-3 transform transition-transform duration-500 hover:rotate-0">
              <div className="min-h-40 w-80 rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-900 p-6 shadow-2xl"></div>
            </div>

            <div className="z-15 absolute bottom-0 left-0 rotate-2 transform transition-transform duration-500 hover:-rotate-1">
              <div className="h-40 w-72 rounded-2xl border bg-white p-4 shadow-xl"></div>
            </div>

            <div className="absolute bottom-10 right-10 z-20">
              <div className="h-32 w-64 rounded-2xl border-black bg-white p-4 shadow-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
