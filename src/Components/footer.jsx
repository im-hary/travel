// app/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8 lg:px-16 font-sans">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="inline-block">
              <span className="text-3xl md:text-4xl font-semibold text-gray-800">
                Jadoo.
              </span>
            </Link>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/help" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links & App Store */}
          <div className='flex flex-col'>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">
              More
            </h3>
            <ul className="flex">
              <li>
                
                 <img src="/Social.png" alt="" />
              </li>
              <li>
                
                 <img src="/Social (1).png" alt="" />
              </li>
              <li>
                
                 <img src="/Social (2).png" alt="" />
              </li>
             
            </ul>

            {/* App Store Buttons */}
            <div>
              <p className="text-gray-800 font-medium mb-3 text-sm md:text-base">
                Discover our app
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#" className="inline-block">
                  <img
                    src="/Google Play.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <img
                    src="/Play Store.png"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;