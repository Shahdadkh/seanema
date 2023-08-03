import localFont from "next/font/local";

// 100 – Thin
// 200 – Extra Light (Ultra Light)
// 300 – Light
// 400 – Normal
// 500 – Medium
// 600 – Semi Bold (Demi Bold)
// 700 – Bold
// 800 – Extra Bold (Ultra Bold)
// 900 – Black (Heavy)

const sloth = localFont({
  src: [
    {
      path: "./Sloth-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Sloth-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Sloth-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SLOTH BOLD.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Sloth Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--sloth-font",
});

export default sloth;
