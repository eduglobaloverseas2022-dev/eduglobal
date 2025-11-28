export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-4 text-center">

      {/* Floating blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float delay-2s"></div>
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-float delay-4s"></div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 glow-text typing-text">
        Welcome to EduGlobal Overseas
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 animate-fadeInUp">
        Our website is currently under construction. <br />
        Thank you for your patience!
      </p>

      {/* Loader */}
      <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
