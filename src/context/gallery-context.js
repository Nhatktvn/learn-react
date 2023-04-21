import { createContext, useContext, useState } from "react";
const dataFake = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1674326713405-06b44b439013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1680169268364-eb0e35576401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1676970563427-10b616e28b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1680227047267-fd9225d5f7f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 5,
    url: "https://plus.unsplash.com/premium_photo-1676693583291-0056b190b6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1680169287465-d995e9bb6b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isFavourite: false,
  },
];

const GallertContext = createContext();
function GalleryProvider(props) {
  const [photos, setPhotos] = useState(dataFake);
  const [cartItems, setCartItems] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);
  const toggleFavourite = (photoId) => {
    const newPhoto = photos.map((photo) => {
      if (photo.id === photoId) {
        return {
          ...photo,
          isFavourite: !photo.isFavourite,
        };
      }
      return photo;
    });

    setPhotos(newPhoto);
    const photoFavourite = photos.filter((photo) => photo.isFavourite === true);
    setFavouriteList(photoFavourite);
  };
  const addToCart = (newitems) => {
    setCartItems((item) => [...item, newitems]);
  };
  const value = {
    photos,
    cartItems,
    favouriteList,
    setCartItems,
    setFavouriteList,
    setPhotos,
    toggleFavourite,
    addToCart,
  };
  return (
    <GallertContext.Provider value={value} {...props}></GallertContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GallertContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { useGallery, GalleryProvider };
