
"use client"
import Logo from './ui/navbarUi/Logo';
import MobileMenuButton from './ui/navbarUi/MobileMenuButton';
import NavLinks from './ui/navbarUi/NavLinks';
import UserMenu from './ui/navbarUi/UserMenu';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm w-full flex px-4 md:px-16 lg:px-32">
        <div className="mx-auto w-full">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Layout: Hamburger Left, Logo Right */}
            <div className="flex w-full items-center md:hidden">
              {/* Hamburger Button (Left-aligned on mobile) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Spacer to push logo to the right */}
              <div className="flex-1"></div>

              {/* Logo (Right-aligned on mobile) */}
              <Logo />
            </div>

            {/* Desktop Layout: Keep original layout */}
            <div className="hidden w-full items-center md:flex md:justify-between">
              <Logo />
              <div className="flex items-center gap-8">
                <nav aria-label="Global">
                  <NavLinks />
                </nav>
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Menu (same as before) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-gray-500">MENU</h2>
            <NavLinks mobile />
          </nav>

          <div className="border-t border-gray-200 pt-6">
            <UserMenu mobile />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-opacity-25 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}