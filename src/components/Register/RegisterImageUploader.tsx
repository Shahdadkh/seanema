import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "iconsax-react";

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

export default function Previews(props: any) {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
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

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="relative container mt-2">
      {files.length === 0 ? (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="bg-[#24243B] w-full h-40 rounded-xl mt-2 text-center border border-transparent cursor-pointer">
            <Camera size="38" color="#AAAAAA" className="mx-auto mt-10" />
            <div className="text-[#AAAAAA]/50 mt-3 text-lg">Upload Photo</div>
          </div>
        </div>
      ) : (
        <aside style={thumbsContainer}>{thumbs}</aside>
      )}
    </section>
  );
}
