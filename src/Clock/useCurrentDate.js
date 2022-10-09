import { useState, useEffect } from "react";

export const useCurrentDate = () => {

const [dateAndTime, setDateAndTime] = useState(new Date());

useEffect(() => {
  const intervalID = setInterval(() => {
    setDateAndTime(new Date());
  }, 1000);

  return () => {
    clearInterval(intervalID);
  };
}, []);

return dateAndTime

};