import React, { createContext, useState, useEffect } from "react";

const ImageDataContext = createContext();

const ImageDataContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/api/get-image-data");
        if (!response.ok) {
          throw new Error("No image data returned from api.");
        }
        const data = await response.json();
        setImageData(data);
        setLoading(false);
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
