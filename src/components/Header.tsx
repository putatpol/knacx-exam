import ButtonCart from "./button/ButtonCart";
import ButtonTheme from "./button/ButtonTheme";
import Link from "next/link";
const Header = () => {
  return (
    <div className="mx-8 flex justify-between border-b p-4 *:flex *:items-center">
      <div>
        <h1>Exam </h1>
      </div>
      <div className="space-x-5 text-xs text-gray-500 *:hidden *:sm:flex">
        <p className="">Front-end</p>
        <span>|</span>
        <p>Putttapol Putthati</p>
      </div>
      <div className="space-x-4">
        <ButtonCart />
        <ButtonTheme />
      </div>
    </div>
  );
};

export default Header;
