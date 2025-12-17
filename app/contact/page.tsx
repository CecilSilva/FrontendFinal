import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans py-14">
      <div className="text-center">
        <h1 className="text-white text-4xl"style={{ fontFamily: "Ethnocentric, sans-serif" }}>Contact Us</h1>
        <div className="border-cyan-700 border-0 mx-auto w-300 py-10 ">

          {/* Graphic */}
          <Image
            src="/images/contact-us-cartoon.png"
            alt="Trading Graphic"
            width={200}  // adjust size
            height={300} // adjust size
            className="py-6 mb-7 transition-transform duration-300 hover:scale-105 hover:opacity-90 mx-auto"
          />

          {/* Centered text */}
      <p className="text-white text-xl text-center" style={{ fontFamily: "Ethnocentric, sans-serif" }}>Phone ------ |+1| 786-613-9890</p>
      <p className="text-white text-xl text-center" style={{ fontFamily: "Ethnocentric, sans-serif" }}>Email ------ havenprojecthq@gmail.com</p>
      <p className="text-white text-xl text-center" style={{ fontFamily: "Ethnocentric, sans-serif" }}>Insta ------ @thehavenproject</p>

        </div>

      </div>
      






      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Haven. All rights reserved.
      </footer>
    </div>
  );
}