import React from "react";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import Button from "../buttons/Button";

const FormBanner = () => {
  return (
    <div className="bg-wave-pattern w-full bg-cover py-10">
      <div className="m-3">
        <h3 className="font-black text-xl text-gray-50">
          Sign up for <span className="text-yellow-400">20%</span> on your first
          order
        </h3>
        <Form className="my-4">
          <div className="flex ">
            <FormInput type="email" placeholder="Enter Email"></FormInput>
            <Button variant="purple" size="small" content="Submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormBanner;
