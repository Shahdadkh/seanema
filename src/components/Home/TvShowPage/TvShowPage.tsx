import TitlePage from "@/components/Common/TitlePage";
import TitlePageWithSeeAll from "@/components/Common/TitlePageWithSeeAll";
import PopularChannelCarousel from "./PopularChannelCarousel/PopularChannelCarousel";

const TvShowPage = () => {
  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="mt-10">
        <TitlePage title="Tv Show" />
      </div>
      <div className="mx-2 sm:mx-8 mt-14">
        <TitlePageWithSeeAll title="Popular Channel" src="" />
      </div>
      <div className="mt-8 ml-14">
        <PopularChannelCarousel />
      </div>
      <div className="text-white text-3xl font-medium mx-14 mt-12 mb-4">
        Now Playing
      </div>
      <div>ss</div>
    </div>
  );
};

export default TvShowPage;
