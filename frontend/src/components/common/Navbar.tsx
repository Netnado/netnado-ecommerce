import { FaCartShopping, FaCircleUser } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="text-lg font-bold">My Application</div>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <div className="flex items-center space-x-2">
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
