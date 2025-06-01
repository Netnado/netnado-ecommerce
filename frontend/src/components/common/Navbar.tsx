import { FaCartShopping, FaCircleUser } from "react-icons/fa6";
import CountryDropdown from "./CountryDropdown";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="text-lg font-bold grow-3">My Application</div>

      <div className="flex items-center justify-center space-x-4 grow-5">
        <CountryDropdown />
      </div>


      <div className="flex items-center justify-center space-x-2 grow-4">
        <button className="flex items-center justify-between gap-2 bg-white text-blue-500 px-2 py-2 rounded hover:bg-gray-200 cursor-pointer">
          <FaCartShopping />
          Cart
        </button>
        <button className="flex items-center justify-between gap-2 bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
          <FaCircleUser />
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
