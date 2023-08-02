import FilmList from "../Common/FilmList";
import Submenu from "../Common/SubMenu";
import pic1 from "@/assets/images/captain-marvel-3.png";
import pic2 from "@/assets/images/the-captain.png";
import pic3 from "@/assets/images/captain-america-2.png";

const WatchList = () => {
  const filmList = [
    {
      name: "Captian Marvel",
      alt: "",
      year: "2019",
      genre: "Action, Fantasy",
      star: "4.5",
      image: pic1,
      href: "/",
    },
    {
      name: "The Captian",
      alt: "",
      year: "2016",
      genre: "Drama, Thriller",
      star: "4",
      image: pic2,
      href: "/",
    },
    {
      name: "Captian America",
      alt: "",
      year: "2018",
      genre: "Action, Fantasy",
      star: "3.5",
      image: pic3,
      href: "/",
    },
  ];

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="text-white text-center my-10 text-3xl font-semibold">
        Watchlist
      </div>
      <div className="mb-40">
        <FilmList src={filmList} />
      </div>
      <Submenu />
    </div>
  );
};

export default WatchList;
