import React from 'react';
import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <div
      className='relative h-[200px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <footer className='fixed bottom-0 h-[200px] w-full bg-zinc-950 text-gray-400 flex items-center px-5 md:px-10 border-t border-zinc-800'>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-center md:text-left">
              Copyright © 2025 Apple Inc. All rights reserved.
            </p>

            {/* Footer Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {footerLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}