"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../core/services/cropImage";

export default function CropImageModal({
  showModal,
  setShowModal,
  image,
  returnImage,
}: {
  showModal: any;
  setShowModal: any;
  image: any;
  returnImage: any;
}) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImage);
      returnImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  useEffect(() => {
    if (showModal === true) {
      setOpenModal("dismissible");
    }
    if (openModal === undefined) {
      setShowModal(false);
    }
  });

  const handleClose = () => {
    showCroppedImage();
    setOpenModal(undefined);
  };

  return (
    <div>
      <Modal dismissible show={props.openModal === "dismissible"}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-6 h-5/6">
            <div>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={3 / 3}
                cropShape="round"
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-white backgroundColor2 hover:backgroundColor7"
            onClick={() => handleClose()}
          >
            Crop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
