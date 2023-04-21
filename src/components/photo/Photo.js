import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photo = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = async () => {
    const image = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...image];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  //useEffect(callback, [dependencies])
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.map((val, index) => {
          return (
            <div key={index} className="p-3 shadow-md rounded-lg">
              <img src={val.download_url} alt={val.author} />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="inline-block px-5 py-2 bg-purple-500 text-white w-max"
          onClick={handleLoadMorePhotos}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
