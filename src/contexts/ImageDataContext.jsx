import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ImageDataContext = createContext();

const ImageDataContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/api/get-image-data");
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
        setImageData(data);
        console.log("set the image data");
        setLoading(false);
        console.log("set the loading");
      } catch (err) {
        console.error(`There was an error: ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageDataContext.Provider value={{ imageData, loading }}>
      {children}
    </ImageDataContext.Provider>
  );
};

export { ImageDataContext, ImageDataContextProvider };
