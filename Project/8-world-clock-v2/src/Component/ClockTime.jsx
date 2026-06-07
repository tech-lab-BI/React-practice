import { useEffect, useState } from "react";

function ClockTime() {
    const [t, setT] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setT(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);
  return (
    <p>
      Now the time is ::{" "}
      <span class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        {t.toLocaleTimeString()}
      </span>{" "}
      and Date ::{" "}
      <span class="shadow p-3 mb-5 bg-body-tertiary rounded">
        {t.toLocaleDateString()}
      </span>
    </p>
  );
}

export default ClockTime;
