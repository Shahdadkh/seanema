import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DocumentDownload, TickSquare } from "iconsax-react";

export default function DownloadModal({
  showModal,
  setShowModal,
}: {
  showModal: any;
  setShowModal: any;
}) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (showModal === true) {
      setOpen(true);
    }
    if (open === false) {
      setShowModal(open);
    }
  });

  const downloadList = [
    {
      quality: "High",
      resolution: "720P",
      size: "1,5 GB",
    },
    {
      quality: "Med",
      resolution: "360P",
      size: "0,6 GB",
    },
    {
      quality: "Low",
      resolution: "144P",
      size: "0,2 GB",
    },
  ];
  const [selected, setSelected] = useState(downloadList[0].quality);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom backgroundColor3 w-4/6 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="my-16">
                <DocumentDownload
                  size="35"
                  color="#ffffff"
                  variant="Outline"
                  className="mx-auto"
                />
                <div className="text-white text-2xl font-bold text-center mt-4">
                  Download Film
                </div>
              </div>
              <div className="backgroundColor1 border borderColor4 my-2">
                <div className="my-8">
                  {downloadList.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setSelected(item.quality)}
                      className="flex justify-between items-center my-4 mx-10 cursor-pointer"
                    >
                      <div className="flex justify-center items-center">
                        <TickSquare
                          size="22"
                          color="#aaaaaa"
                          variant={
                            selected.includes(item.quality) ? "Bold" : "Outline"
                          }
                        />
                        <div className="textColor1 text-2xl font-semibold ml-2">
                          {`${item.quality} (${item.resolution})`}
                        </div>
                      </div>
                      <div className="textColor1 text-2xl font-semibold">
                        {item.size}
                      </div>
                    </div>
                  ))}

                  <div
                    onClick={() => setOpen(false)}
                    className="flex justify-center items-center mx-auto my-12 backgroundColor2 w-2/4 h-16 rounded-3xl text-white text-2xl font-bold cursor-pointer"
                  >
                    Download
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
