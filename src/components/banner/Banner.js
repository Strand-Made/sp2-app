import React from "react";
const classes = {
  title: "text-gray-100 text-xl ml-2 font-bold",
  container: "bg-wave-pattern w-full bg-cover py-10",
};

const Banner = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{props.content}</h3>
    </div>
  );
};

export default Banner;
