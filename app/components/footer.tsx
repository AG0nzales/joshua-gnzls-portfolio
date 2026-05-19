"use client";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-300 py-12 mt-20 relative z-10 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Joshua Gonzales
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Software Engineer with 3+ years of experience, specializing in
              full-stack development. Passionate about building innovative web
              applications, creating seamless user experiences, and exploring
              cutting-edge technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">📧</span>
                <span>gonzalesjoshdre@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">📱</span>
                <span>(+63) 905 245 0984</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>Davao City, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-600">
            © 2026 Joshua Gonzales. All rights reserved.
          </p>
          <p className="text-gray-600 mt-2 md:mt-0 flex items-center gap-2">
            Let's connect! 👍
          </p>
        </div>
      </div>
    </footer>
  );
}
