import { useRouter } from "next/router";

const FilmPreviewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <h1 className="text-white">FilmPreviewPage: #{id}</h1>
    </div>
  );
};

export default FilmPreviewPage;
