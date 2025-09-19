import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700 py-4 mt-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-3 md:mb-0">
          <p className="text-gray-300 text-sm">
            © 2025 Formula Slug | UC Santa Cruz
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Empowering the next generation of engineers
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href="mailto:formulaslug@gmail.com"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span className="text-sm">Email</span>
          </a>

          <a
            href="https://www.instagram.com/formula_slug"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.017 0C8.396 0 7.933.016 6.706.095 5.481.174 4.677.444 3.972.84c-.721.393-1.334.956-1.726 1.726-.396.705-.666 1.509-.745 2.734C1.42 6.527 1.404 6.99 1.404 10.609c0 3.619.016 4.082.095 5.309.079 1.225.349 2.029.745 2.734.392.72.955 1.333 1.726 1.726.705.396 1.509.666 2.734.745 1.227.079 1.69.095 5.309.095s4.082-.016 5.309-.095c1.225-.079 2.029-.349 2.734-.745.72-.393 1.333-.956 1.726-1.726.396-.705.666-1.509.745-2.734.079-1.227.095-1.69.095-5.309s-.016-4.082-.095-5.309c-.079-1.225-.349-2.029-.745-2.734-.393-.72-.956-1.333-1.726-1.726C19.357.444 18.553.174 17.328.095 16.101.016 15.638 0 12.017 0zm0 5.838a6.174 6.174 0 100 12.348 6.174 6.174 0 000-12.348zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.624-10.5a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Instagram</span>
          </a>
          
          <a
            href="https://www.linkedin.com/company/formula-slug"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;