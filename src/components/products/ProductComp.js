import { useEffect, React } from "react";
import Button from "../buttons/Button";
import Watch from "../../assets/smart-watch.png";
import fetchProducts from "../../api/data";

const ProductComp = () => {
  useEffect(() => {
    const getProducts = async () => {
      const productsFromApi = await fetchProducts();
    };
    getProducts();
  }, []);

  return (
    <div className=" w-full flex flex-row">
      <img className="w-52" src={Watch} alt="FitBit smart watch"></img>
      <div className="flex flex-col justify-between w-full">
        <div>
          <h5 className="text-2xl text-purple-900">Fitbit</h5>
          <p className="text-gray-400 text-sm">
            The newest coolest watch. You will actually be ten times faster with
            this watch.
          </p>
        </div>
        <div className="flex flex-row justify-between px-2 ">
          <p className="font-bold text-xl text-purple-900">price</p>
          <div>
            <Button content="Buy" size="large" variant="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
