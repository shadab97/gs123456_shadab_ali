import { FaRegCircleUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-12  top-0 py-8 flex justify-between px-8 items-center bg-white shadow-md">
      <div>LOGO</div>
      <div className=" text-3xl">Data Viewer app</div>
      <div className="flex gap-1">
        <FaRegCircleUser />
        <FaCaretDown />
      </div>
    </header>
  );
};

export default Header;
