/** @format */

import { Button } from "@material-tailwind/react";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ListMenu = () => {
  const [links, setLinks] = useState([]);
  const [heading, setHeading] = useState("");
  const [headLink, setHeadLink] = useState(null);

  const myMenu = () => {
    setLinks([
      {
        name: "Dashboard",
        submenu: false,
        link: "/",
      },
      {
        name: "Profile",
        submenu: true,
        subName: "profile",
        linkSubMenu: [
          {
            name: "Sejarah",
            link: "/profile/sejarah",
          },
          {
            name: "Visi & Misi",
            link: "/profile/visi-misi",
          },
          {
            name: "Pimpinan Fakultas & Prodi",
            link: "/profile/pimpinan-fakultas",
          },
        ],
      },
      {
        name: "Program Studi",
        submenu: true,
        subName: "prodi",
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
        name: "Survei Kepuasan",
        submenu: false,
        link: "/survei",
      },
      {
        name: "Download",
        submenu: false,
        link: "/download/dokumen",
        // linkSubMenu: [
        //   {
        //     name: "Jadwal",
        //     link: "/download/jadwal",
        //   },
        //   {
        //     name: "Dokumen",
        //     link: "/download/dokumen",
        //   },
        // ],
      },
      {
        name: "Mahasiswa",
        submenu: false,
        link: "/mahasiswa",
      },
      {
        name: "Alumni",
        submenu: false,
        link: "/alumni",
      },
      {
        name: "Laboratorium",
        submenu: false,
        link: "/lab",
      },
      {
        name: "Lokasi",
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
    window.open("https://admin.fstuogp.com", "_blank");
  };

  // mengambil lokasi
  const location = useLocation();
  const { pathname } = location;

  // memisahkan / pada pathname
  useEffect(() => {
    const second = pathname.split("/");
    if (second.length > 2) {
      setHeadLink(second[1]);
    }
    return () => {
      setHeadLink(null);
    };
  }, [pathname]);

  return (
    <div className="flex justify-between w-full">
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {links &&
          links.map((row, index) => {
            return (
              <div className="font-cabin text-black" key={index}>
                {!row.submenu ? (
                  <Link
                    to={row.link}
                    className={`${pathname === row.link && "text-pink-900"}`}
                  >
                    <li>{row.name}</li>
                  </Link>
                ) : (
                  // jika punya sub menu
                  <div className="relative">
                    <div
                      className={`flex gap-1 items-center cursor-pointer myNav ${
                        headLink === row.subName && "text-pink-900"
                      }`}
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
                      } lg:absolute lg:min-w-max lg:mt-3 lg:bg-white/[0.95] lg:pt-2 px-5 rounded z-50`}
                    >
                      {row.linkSubMenu.map((lsm, index) => (
                        <Link
                          to={lsm.link}
                          key={index}
                          className={`${
                            pathname === lsm.link && "text-pink-900"
                          }`}
                        >
                          <div className="mb-2 cursor-pointer hover:bg-transparent hover:font-bold hover:text-pink-900">
                            {lsm.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </ul>
      <Button
        variant="gradient"
        onClick={openLink}
        size="sm"
        className="hidden lg:inline-block"
      >
        <span>Login</span>
      </Button>
    </div>
  );
};

export default ListMenu;
