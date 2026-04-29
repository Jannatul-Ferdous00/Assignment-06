import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-6 text-lg">
              Social Links
            </h3>
            <ul className="flex gap-4">
              <li className="p-2 bg-blue-500 rounded-full">
                <a href="">
                  <FaFacebookF className=" text-white rounded"></FaFacebookF>
                </a>
              </li>
              <li className="p-2 bg-blue-500 rounded-full">
                <a href="">
                  <FaTwitter className="bg-blue-500 text-white rounded"></FaTwitter>
                </a>
              </li>
              <li className="p-2  bg-linear-to-tr from-[#e7c058] via-[#e28e4e] to-[#f47637] rounded-full">
                <a href="">
                  <FaInstagram className="bg-yellow-800 text-white rounded"></FaInstagram>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} DigiTools. All rights reserved.
          </div>

          <div className="flex gap-6">
            <ul className="flex flex-wrap justify-center gap-5 ">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
