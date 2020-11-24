import React from "react";
import classNames from "classnames";

const SpinningDots = ({ className }) => {
  const i = "animate-pulse w-1.5 h-1.5 rounded-full bg-gray-300";
  return (
    <div
      className={classNames(
        "spinner absolute inline p-0 h-auto w-full text-center",
        className
      )}
    >
      <span className="inline-flex relative align-middle h-2 text-center opacity-50 w-10">
        <div className="flex w-full justify-around">
          <i className={i} style={{ animationDelay: "-.2s" }}></i>
          <i className={i} style={{ animationDelay: "-.1s" }}></i>
          <i className={i}></i>
        </div>
      </span>
    </div>
  );
};
export default SpinningDots;
