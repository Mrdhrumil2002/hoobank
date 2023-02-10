import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px]   bg-blue-gradient p-[3px] rounded-full cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter}  flex-col bg-primary  rounded-full w-[100%] h-[100%] `}
    >
      <div className={`${styles.flexStart} flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-[18px] leading-[23px] text-gradient font-poppins font-medium">
            <span>Get</span>
          </p>
          <img src={arrowUp} className=" w-[23px] h-[23px] object-contain" />
        </div>
        <p className="text-[18px] leading-[23px] text-gradient font-poppins font-medium  ">
          <span> Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
