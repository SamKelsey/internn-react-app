import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ImageDataContext = createContext();

const ImageDataContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("/api/get-image-data");
        const data = await response.json();
        setImageData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <ImageDataContext.Provider value={{ imageData, loading }}>
      {children}
    </ImageDataContext.Provider>
  );
};

export { ImageDataContext, ImageDataContextProvider };
