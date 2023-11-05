import { createContext, useContext, useEffect, useState } from "react";

const IpContext = createContext();

export const useIp = () => useContext(IpContext);

//api
const apiKey = process.env.REACT_APP_API_KEY;
const apiGetIp = process.env.REACT_APP_API_GET_IP;
const apiGetLoc = process.env.REACT_APP_API_GET_LOC;

//regular exp
const ipRegex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const IpContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [userIp, setUserIp] = useState("");
  const [geoData, setGeoData] = useState(null);

  const fetchIp = () => {
    fetch(apiGetIp)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to get user ip");
        }
        return res.json();
      })
      .then((data) => {
        setInputValue(data.ip);
        setUserIp(data.ip);
      })
      .catch((error) => console.error("failed", error));
  };

  const fetchLoc = () => {
    if (
      inputValue !== "" &&
      (ipRegex.test(inputValue) || domainRegex.test(inputValue))
    ) {
      fetch(
        `${apiGetLoc}apiKey=${apiKey}&${
          ipRegex.test(inputValue) ? "ipAddress" : "domain"
        }=${inputValue}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to get user location");
          }
          return res.json();
        })
        .then((data) => setGeoData(data))
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  useEffect(() => {
    fetchLoc();
  }, [inputValue]);

  return (
    <IpContext.Provider
      value={{
        inputValue,
        setInputValue,
        userIp,
        setUserIp,
        geoData,
        setGeoData,
      }}
    >
      {children}
    </IpContext.Provider>
  );
};
