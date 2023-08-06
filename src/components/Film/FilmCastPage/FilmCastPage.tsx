import { useRouter } from "next/router";

const FilmCastPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>FilmCastPage: #{id}</h1>
    </>
  );
};

export default FilmCastPage;
