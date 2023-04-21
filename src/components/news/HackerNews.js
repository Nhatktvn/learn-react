import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFecthData = useRef({});
  handleFecthData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMessage(`The error happend: ${error}`);
    }
  };
  const handleUpdateQuery = () => {
    const valueInput = document.querySelector("#input-query");
    setQuery(valueInput.value);
  };
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   handleFecthData.current();
    // }, 500);
    // return () => clearTimeout(timer);
    handleFecthData.current();
  }, [query]);
  return (
    <div className="p-5 w-2/4 shadow-md mx-auto mt-5">
      <div className="flex gap-5 mb-5">
        <input
          id="input-query"
          className="border-2 border-solid border-[#888] text-black p-3  rounded-lg  w-full focus:border-blue-600 transition-all"
          type="text"
          defaultValue={query}
        />
        <button
          className="p-3 text-center border-2 border-solid border-red-700 rounded-lg h-max bg-red-700 text-white"
          onClick={handleUpdateQuery}
        >
          Search
        </button>
      </div>
      {loading && (
        <span className="block w-9 h-9 border-4 border-solid border-blue-600 rounded-full border-r-transparent animate-spin mx-auto my-5"></span>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((hit, index) => {
            if (hit.title === null || hit.title === "") {
              return <h3 className="" key={index}></h3>;
            }
            return (
              <h3 className="bg-[#dbdbdb] m-2 w-max p-2 rounded-lg" key={index}>
                {hit.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
