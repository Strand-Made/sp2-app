import React from "react";

const IconRack = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-row justify-center py-3">
      <div className="mx-4 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-headphones w-9 "
        >
          <path
            className="primary fill-current text-gray-300"
            d="M22 17a1 1 0 0 1-2 0v-5a8 8 0 1 0-16 0v5a1 1 0 0 1-2 0v-5a10 10 0 1 1 20 0v5z"
          />
          <path
            className="secondary fill-current text-gray-500"
            d="M7 12a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6c0-1.1.9-2 2-2zm10 0a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6c0-1.1.9-2 2-2z"
          />
        </svg>
        <p className="text-gray-500 text-sm">Sound</p>
      </div>
      <div className="mx-4 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-monitor w-9 "
        >
          <path
            className="secondary fill-current text-gray-300"
            d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5h3a1 1 0 0 0 .83-.45L10 8.8l5.17 7.75a1 1 0 0 0 1.66 0l1.7-2.55H21z"
          />
          <path
            className="primary fill-current text-gray-500"
            d="M21 12h-3a1 1 0 0 0-.83.45L16 14.2l-5.17-7.75a1 1 0 0 0-1.66 0L5.47 12H3V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v7z"
          />
        </svg>
        <p className="text-gray-500 text-sm">Sound</p>
      </div>
      <div className="mx-4 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-desktop w-9 "
        >
          <path
            className="primary fill-current text-gray-300"
            d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v10h16V4H4zm4 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.59l.7.7A1 1 0 0 1 16 23H8a1 1 0 0 1-.7-1.7l.7-.71V20z"
          />
          <path
            className="secondary fill-current text-gray-500"
            d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"
          />
        </svg>
        <p className="text-gray-500 text-sm">PC</p>
      </div>
    </div>
  );
};

export default IconRack;
