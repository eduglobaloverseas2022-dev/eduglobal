export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-4 text-center">

      {/* Floating blurred shapes */}
      <div className="absolute -top-20 -left-20 w-60 h-60 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl animate-float delay-2s"></div>
      <div className="absolute bottom-0 left-1/4 w-44 h-44 sm:w-56 sm:h-56 bg-white/5 rounded-full blur-2xl animate-float delay-4s"></div>

      {/* Headline */}
<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 glow-text typing-text max-w-full sm:max-w-xl md:max-w-2xl whitespace-normal sm:whitespace-nowrap">
  Welcome to EduGlobal <span>Overseas</span>
</h1>



      {/* Subheading */}
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 mb-10 animate-fadeInUp max-w-full sm:max-w-md md:max-w-lg">
        Our website is currently under construction. <br />
        Thank you for your patience!
      </p>

      {/* Loader */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
