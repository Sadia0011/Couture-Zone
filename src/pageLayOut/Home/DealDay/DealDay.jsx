import React, { useEffect, useState } from "react";

const DealDay = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [min, setMin] = useState(24);
  const [sec, setSec] = useState(58);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      } else {
        if (min > 0) {
          setMin(min - 1);
          setSec(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMin(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
            } else {
              clearInterval(countdown);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [sec, min, hours, days]);

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dbCmpPk/jr-korpa-w-AXD-Its-48-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.7",
          width: "100%",
          height: "300px",
        }}
      >
        <div className="w-full h-80 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold"> Deal Of The Day</h2>
          <h2 className=" text-3xl font-bold my-5">
            Discount upto{" "}
            <span className="text-5xl bg-red-600 text-white p-1 rounded-lg">
              70%
            </span>
          </h2>

          <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono text-5xl">
                {days}
                {/* <span style={{ "--value": 15 }}></span> */}
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono text-5xl">
                {hours}
                {/* <span style={{ "--value": 10 }}></span> */}
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono text-5xl">
                {min}
                {/* <span style={{ "--value": 24 }}></span> */}
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono text-5xl">
                {sec}
                {/* <span style={{ "--value": 48 }}></span> */}
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDay;
