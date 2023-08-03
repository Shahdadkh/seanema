import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import CropImageModal from "../Common/CropImageModal";
import { Edit2 } from "iconsax-react";
import pic from "@/assets/images/user.png";

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

const thumb: any = {
  display: "inline-flex",
  borderRadius: "50%",
  border: "1px solid #191a32",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 0,
  boxSizing: "border-box",
};

const thumbInner: any = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: any = {
  display: "block",
  width: "auto",
  height: "100%",
  borderRadius: "50%",
};

export default function DashboardImageUploader({ setGetImage }: any) {
  const [files, setFiles] = useState<any>([]);
  const [base64Decode, setBase64Decode] = useState<any>([]);
  const [showModal, setShowModal] = useState<any>(false);
  const [finalImage, setFinalImage] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      convertToBase64(acceptedFiles[0]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const convertToBase64 = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then(
      (result) => {
        setBase64Decode(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image
          src={finalImage}
          style={img}
          alt=""
          width={100}
          height={100}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  const handleUpload = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (finalImage.length !== 0) {
      setGetImage(finalImage);
    }
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [finalImage]);

  return (
    <section className="relative container mt-10">
      {base64Decode.length === 0 ? (
        <aside style={thumbsContainer}>
          <div style={thumb}>
            <div style={thumbInner}>
              <Image src={pic} style={img} alt="" width={100} height={100} />
            </div>
          </div>
        </aside>
      ) : null}
      {/* End */}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="absolute right-64 sm:right-44 bottom-3 flex justify-center items-center w-14 h-14 border-2 borderColor4 backgroundColor2 rounded-full cursor-pointer">
          <Edit2 onClick={() => handleUpload()} size="18" color="#fff" />
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <CropImageModal
        showModal={showModal}
        setShowModal={setShowModal}
        image={base64Decode}
        returnImage={setFinalImage}
      />
    </section>
  );
}
