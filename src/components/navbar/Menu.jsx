/** @format */

import { useState, useEffect } from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import ListMenu from "./ListMenu";

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const openLink = () => {
    window.open("https://admin.fstuogp.com");
  };

  return (
    <nav className="sticky z-50 top-0 block shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border text-white w-full mx-auto py-2 px-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block w-full">
          <ListMenu />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="overflow-auto">
        <ListMenu />
        <Button
          onClick={openLink}
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
        >
          <span>Login</span>
        </Button>
      </MobileNav>
    </nav>
  );
};

export default Menu;
