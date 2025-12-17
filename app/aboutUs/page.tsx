import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans py-14">
      <div className="text-center">
        <h1 className="text-white text-4xl"style={{ fontFamily: "Ethnocentric, sans-serif" }}>About Us</h1>
        <div className="border-cyan-700 border-0 mx-auto w-400 py-10">

          {/* Graphic */}
          <Image
            src="/images/about-us-cartoon.png"
            alt="Trading Graphic"
            width={500}  // adjust size
            height={300} // adjust size
            className="py-6 mb-7 transition-transform duration-300 hover:scale-105 hover:opacity-90 mx-auto"
          />

          <p className="text-white text-xl"style={{ fontFamily: "Ethnocentric, sans-serif" }}>
            Haven began as a simple idea, with its founders experimenting with trading scripts on paper. Those early explorations evolved into a 
            basic Python program, laying the foundation for a more sophisticated platform. Today, with a growing team and both frontend and backend 
            under development, Haven aims to provide a comprehensive software solution for designing and analyzing trading strategies. 
            The platform is dedicated not only to enabling users to explore the stock market and quantitative analysis but also to fostering a 
            space where learning and innovation in financial strategy are accessible to all.
          </p>
        </div>

      </div>
      






      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Haven. All rights reserved.
      </footer>
    </div>
  );
}