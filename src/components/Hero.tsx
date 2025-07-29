import React from 'react';
import { ArrowRightIcon, DownloadIcon } from 'lucide-react';
const Hero = () => {
  return <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-50" style={{
        backgroundBlendMode: 'multiply'
      }}></div>
        {/* Blueprint overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634469875582-a0637d4249ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
            Paul Campbell
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
            Where Mechanical Precision Meets Editorial Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8 font-medium">
            Automotive Copywriter & Former Mechanic
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="portfolio" className="bg-red-600 text-white px-6 py-3 rounded font-medium hover:bg-red-700 transition-colors flex items-center justify-center sm:justify-start">
              Explore My Work
              <ArrowRightIcon size={18} className="ml-2" />
            </a>
            <a href="resume.docx" download className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded font-medium hover:bg-white/20 transition-colors flex items-center justify-center sm:justify-start">
              Download Resume
              <DownloadIcon size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;