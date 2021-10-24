import React, { createContext, useState, useEffect } from "react";

const TeamDataContext = createContext();

const TeamDataContextProvider = ({ children }) => {
  const [teamData, setTeamData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/api/get-team-data");
        if (!response.ok) {
          throw new Error("No team data returned from api.");
        }
        const data = await response.json();
        setTeamData(data);
        setLoading(false);
      } catch (err) {
        console.error(`There was an error: ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <TeamDataContext.Provider value={{ teamData, loading }}>
      {children}
    </TeamDataContext.Provider>
  );
};

export { TeamDataContext, TeamDataContextProvider };
