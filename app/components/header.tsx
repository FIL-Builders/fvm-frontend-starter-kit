import { FC } from "react";

interface HeaderProps {
  showAddress: boolean;
}

const Header: FC<HeaderProps> = ({ showAddress }) => {
  console.log(showAddress)
  return (
    <div className="fixed top-0 w-full bg-blue-600 h-20 flex items-center">
      <div className="fixed left-10">Logo</div>
      {showAddress && <div className="fixed right-10">nav</div>}
    </div>
  );
};

export default Header;
