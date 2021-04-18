import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="flex flex-col  md:flex-row justify-center ">
        <div>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <p>Customer support</p>
          <p>Tax regulations</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
