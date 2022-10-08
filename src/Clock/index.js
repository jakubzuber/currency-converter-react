import { useEffect, useState } from "react";
import { ClockField } from "./styled"


const Clock = () => {
  const [dateAndTime, setDateAndTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDateAndTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <ClockField>
    Date & hour:
    {" "}
    {dateAndTime.toLocaleString("en-EN" , {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long"

    })}
    </ClockField>
)
};

export default Clock;
