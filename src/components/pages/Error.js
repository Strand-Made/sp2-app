import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="flex flex-col">
        <h1 className="text-4xl text-purple-900 font-medium  ">
          Hmm.... This didnt go as planned.
        </h1>
        <div>
          <Link
            className="bg-red-400 hover:bg-red-300 text-red-50 border-0 rounded-lg font-bold py-3 px-5"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
