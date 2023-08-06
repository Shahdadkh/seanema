import { useRouter } from "next/router";

const FilmPreviewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>FilmPreviewPage: #{id}</h1>
    </>
  );
};

export default FilmPreviewPage;
