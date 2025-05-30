'use client';

import { useState, useEffect } from 'react';

export default function UserMenu({ mobile = false }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('user-menu-dropdown');
      const button = document.getElementById('user-menu-button');

      if (
        !dropdown?.contains(event.target) &&
        !button?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (mobile) {
    return (
      <div className="flex flex-col gap-4">
        <div className="p-2">
          <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            My profile
          </a>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Billing summary
          </a>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Team settings
          </a>
        </div>

        <div className="p-2">
          <form method="POST" action="#">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              Logout
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left">
      <button
        id="user-menu-button"
        type="button"
        className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wzNjU4ODB8MHwxfHNlYXJjaHwxfHxpbnRlcmVzdGluZyBwaG90b3Nob3B8ZW58MHx8fDE3MTc3NTE2NDF8MA&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="size-10 object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id="user-menu-dropdown"
          className="absolute right-0 z-50 mt-1 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
        >
          <div className="p-2">
            <a
              href="#" 
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              My profile
            </a>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Billing summary
            </a>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Team settings
            </a>
          </div>

          <div className="p-2">
            <form method="POST" action="#">
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}