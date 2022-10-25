/** @format */

import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { DashbordContext } from "../../context/dashboard";
import moment from "moment";
import "moment/locale/id";

moment.locale("id");

const PengumumanModal = () => {
  const { setOpen, open, row } = useContext(DashbordContext);
  const handleOpen = () => setOpen(!open);

  const [width, setWidth] = useState("lg");

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 900) {
      setWidth("xxl");
    }
  }, [setWidth]);

  return (
    <>
      {row.prodi && (
        <Dialog
          size={width}
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <div className="overflow-auto max-h-screen">
            <DialogHeader className="font-cabin">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <h2 className="text-sm">Prodi {row.prodi.nm_prodi}</h2>
                  <h2 className="text-sm">
                    Tgl. {moment(row.tgl_pengumuman).format("DD MMMM YY")}
                  </h2>
                </div>
                <hr />
                <h1 className="text-center lg:text-xl text-lg">
                  {row.judul_pengumuman}
                </h1>
              </div>
            </DialogHeader>
            <DialogBody divider className="font-cabin">
              <div
                className="overflow-auto"
                dangerouslySetInnerHTML={{
                  __html: row.isi_pengumuman,
                }}
              ></div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="blue"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Tutup</span>
              </Button>
            </DialogFooter>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default PengumumanModal;
