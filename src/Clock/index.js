import { useEffect, useState } from "react";
import "./style.css";


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
    <div className="dateTime">
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
    </div>
)
};

export default Clock;
