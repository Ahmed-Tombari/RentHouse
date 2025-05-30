"use client"
import React from 'react';

const Nav = () => {
  return (
    <header className="navbar top-0 left-0 z-[999] w-full absolute">
      <div className="relative mx-auto max-w-[1390px] px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between">
          
          <div className="block py-4 lg:py-0">
            <a className="block max-w-[145px] sm:max-w-[180px]" href="/">
              <img
                alt="Logo"
                loading="lazy"
                width={130}
                height={44}
                decoding="async"
                className="block dark:hidden"
                src="/images/home.png"
                style={{ color: "transparent" }}
              />
              <img
                alt="Logo"
                loading="lazy"
                width={130}
                height={44}
                decoding="async"
                className="hidden dark:block"
                src="/images/logo/logo-white.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
          
          <button
            className="navbarOpen absolute top-1/2 right-4 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
            aria-label="navbarOpen"
            name="navbarOpen"
          >
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
          </button>
          
          <div className="hidden menu-wrapper relative justify-between lg:flex">
            <button
              className="navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
              aria-label="navbarClose"
              name="navbarClose"
            >
              <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
              <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
            </button>
            
            <nav className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white/95 text-center backdrop-blur-xs lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none dark:bg-black/95 lg:dark:bg-transparent">
              <ul className="items-center space-y-3 lg:flex lg:space-y-0 lg:space-x-8 xl:space-x-10">
                
                <li className="menu-item">
                  <a className="lg:py-7 ud-menu-scroll hover:text-primary inline-flex items-center" href="/">Home</a>
                </li>
                
                <li className="menu-item">
                  <a className="lg:py-7 ud-menu-scroll hover:text-primary inline-flex items-center" href="/#about">About</a>
                </li>
                
                <li className="menu-item">
                  <a className="lg:py-7 ud-menu-scroll hover:text-primary inline-flex items-center" href="/#features">Features</a>
                </li>
                
                <li className="menu-item">
                  <a className="lg:py-7 ud-menu-scroll hover:text-primary inline-flex items-center" href="/#pricing">Pricing</a>
                </li>
                
                <li className="submenu-item menu-item group relative">
                  <a className="lg:py-7 false hover:text-primary group-hover:text-primary inline-flex items-center" href="#">
                    Pages
                    <span className="pl-3">
                      <svg className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul className="hidden submenu lg:dark:shadow-card-dark space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A]">
                    <li><a className="false hover:text-primary inline-flex items-center justify-center text-center" href="/blog">Blog Grids</a></li>
                    <li><a className="false hover:text-primary inline-flex items-center justify-center text-center" href="/auth/signin">Sign In</a></li>
                    <li><a className="false hover:text-primary inline-flex items-center justify-center text-center" href="/auth/signup">Sign Up</a></li>
                    <li><a className="false hover:text-primary inline-flex items-center justify-center text-center" href="/error">404 Error</a></li>
                  </ul>
                </li>
                
                <li className="menu-item">
                  <a className="lg:py-7 ud-menu-scroll hover:text-primary inline-flex items-center" href="/#support">Support</a>
                </li>
                
              </ul>
            </nav>
          </div>
          
          <div className="mr-[60px] flex items-center justify-end lg:mr-0">
            <button className="mr-4 hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black sm:flex dark:bg-black dark:text-white">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_369_1884)">
                  <path d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_369_1884">
                    <rect width="18" height="18" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <a href="#" className="btn btn-sm bg-primary hover:bg-darkPrimary rounded-md text-white">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
