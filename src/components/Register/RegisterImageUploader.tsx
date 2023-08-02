import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "iconsax-react";
import CropImageModal from "../Common/CropImageModal";

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  border: "1px solid transparent",
  backgroundColor: "#24243B",
  borderRadius: "15px",
  height: 160,
};

const thumb: any = {
  display: "inline-flex",
  border: "1px solid transparent",
  marginTop: 18,
  marginBottom: 8,
  marginRight: 8,
  width: 120,
  height: 120,
  padding: 4,
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

export default function Previews({ setGetImage }: any) {
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
        <img
          src={finalImage}
          style={img}
          alt=""
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
    setGetImage(finalImage);
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [finalImage]);

  return (
    <section className="relative container mt-2">
      {base64Decode.length === 0 ? (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div
            onClick={() => handleUpload()}
            className="backgroundColor3 w-full h-64 rounded-2xl mt-2 text-center border border-transparent cursor-pointer"
          >
            <Camera size="38" className="mx-auto mt-20 textColor1" />
            <div className="textColor1 opacity-60 mt-3 text-xl">
              Upload Photo
            </div>
          </div>
        </div>
      ) : (
        <aside style={thumbsContainer}>{thumbs}</aside>
      )}
      <CropImageModal
        showModal={showModal}
        setShowModal={setShowModal}
        image={base64Decode}
        returnImage={setFinalImage}
      />
    </section>
  );
}
