import { useEffect } from "react";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/Home");
  }, []);
};

export default App;
