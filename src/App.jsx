import { useEffect, useState } from "react";
import { getContacts } from "./api/ContactService";
import { Header } from "./components";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const toogleModal = (show) => {
    console.log("clicked");
  };

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header toogleModal={toogleModal} nbOfContacts={data.totalElements} />
    </>
  );
}

export default App;
