import { useEffect, useMemo, useState } from "react";

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    finished: false,
  });

  // Convert target date to milliseconds
  const targetMs = useMemo(() => {
    const t = new Date(targetDate).getTime();
    return Number.isNaN(t) ? null : t;
  }, [targetDate]);

  useEffect(() => {
    if (targetMs == null) return;

    const tick = () => {
      const now = Date.now();
      const distance = targetMs - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          finished: true,
        });
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const m = Math.floor((distance / (1000 * 60)) % 60);
      const s = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
        finished: false,
      });
    };

    tick(); // initial call
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  if (targetMs == null) {
    return (
      <div className="text-center text-white">
        <p className="text-sm mobile-6xl:text-base laptop-xxxs:text-lg">
          Invalid date provided to <code>CountdownTimer</code>.
        </p>
      </div>
    );
  }

  return (
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="row pt-5 mt-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div class="col-md-3 col-sm-6 col-6 mb-4 mb-lg-0" key={unit}>
              <div class="ct_counter_card text-center">
                <h3 class="ct_fs_100  ct_yellow_text" id="days">
                  {" "}
                  {timeLeft[unit]}{" "}
                </h3>
                <h5 class="mb-0 text-white ct_fs_32"> {unit}</h5>
              </div>
            </div>
          ))}

          {timeLeft.finished && (
            <h3 class="ct_fs_44 ct_fw_600 ct_yellow_text " id="days">
              It’s time! ✨
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};
