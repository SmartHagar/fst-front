/** @format */

import { Button } from "@material-tailwind/react";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListMenu = () => {
  const [links, setLinks] = useState([]);
  const [heading, setHeading] = useState("");

  const myMenu = () => {
    setLinks([
      {
        name: "Dashboard",
        submenu: false,
        link: "/dashboard",
      },
      {
        name: "Profile",
        submenu: true,
        linkSubMenu: [
          {
            name: "Sejarah",
            link: "/sejarah",
          },
          {
            name: "Visi & Misi",
            link: "/visi-misi",
          },
          {
            name: "Pimpinan Fakultas",
            link: "/pimpinan-fakultas",
          },
        ],
      },
      {
        name: "Program Studi",
        submenu: true,
        linkSubMenu: [
          {
            name: "Sistem Informasi",
            link: "/prodi/sistem-informasi",
          },
          {
            name: "Teknik Geologi",
            link: "/prodi/geologi",
          },
          {
            name: "Biologi",
            link: "/prodi/biologi",
          },
        ],
      },
      {
        name: "Galeri",
        submenu: false,
        link: "/galeri",
      },
      {
        name: "Berita",
        submenu: false,
        link: "/berita/list",
      },
      {
        name: "Tentang Kami",
        submenu: false,
        link: "/tentang-kami",
      },
    ]);
  };

  useEffect(() => {
    myMenu();
  }, []);

  document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".myNav")) return;
    // If user clicks outside the element, hide it!
    setHeading("");
  });

  const openLink = () => {
    window.open(
      "https://admin.uogp.databasemahasiswatambrauw.web.id",
      "_blank"
    );
  };

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links &&
        links.map((row, index) => (
          <div className="font-cabin text-black" key={index}>
            {!row.submenu ? (
              <NavLink to={row.link}>
                <li>{row.name}</li>
              </NavLink>
            ) : (
              // jika punya sub menu
              <div className="relative">
                <div
                  className="flex gap-1 items-center cursor-pointer myNav"
                  onClick={() => {
                    heading !== row.name
                      ? setHeading(row.name)
                      : setHeading("");
                  }}
                >
                  <li>{row.name}</li>
                  {/* ganti icon */}
                  {heading === row.name ? (
                    <HiOutlineChevronDown />
                  ) : (
                    <HiOutlineChevronRight />
                  )}
                </div>
                <div
                  className={`${
                    heading === row.name ? "block" : "hidden"
                  } lg:absolute lg:min-w-max lg:mt-5 lg:bg-white/[.8] lg:pt-2 px-5 rounded z-50`}
                >
                  {row.linkSubMenu.map((lsm, index) => (
                    <NavLink to={lsm.link} key={index}>
                      <div className="mb-2 cursor-pointer hover:bg-transparent hover:font-bold hover:text-pink-900">
                        {lsm.name}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      <li>
        <Button
          variant="gradient"
          onClick={openLink}
          size="sm"
          className="hidden lg:inline-block"
        >
          <span>Login</span>
        </Button>
      </li>
    </ul>
  );
};

export default ListMenu;
