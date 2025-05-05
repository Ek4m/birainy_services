import React from "react";

export const RollingOrder = () => {
  return (
    <div className="">
      <a href="#">
          <div className="">
            <img
              alt="icon"
              loading="eager"
              width={58}
              height={46}
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="https://birainy.com/_next/static/media/direction.e5fbef99.svg"
            />
          </div>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="9">
              <textPath href="#circle" startOffset="0%">
                SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
              </textPath>
            </text>
          </svg>
      </a>
    </div>
  );
};
