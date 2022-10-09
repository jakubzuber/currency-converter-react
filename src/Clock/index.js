import { ClockField } from "./styled"
import { useCurrentDate } from "./useCurrentDate"


const Clock = () => {
  const dateAndTime = useCurrentDate();

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
