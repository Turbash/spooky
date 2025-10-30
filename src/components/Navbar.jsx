import { useRef } from "react";

const Navbar = () => {
  const overlayRef = useRef(null);

  const closeOverlay = () => {
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
    }
  };
  return (
    <div className="w-full absolute inset-0 z-10">
      <div className="container flex justify-between items-center py-7 2xl:py-10">
        <a href="" className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
          Rupz Web
        </a>
        <ul className="hidden sm:flex items-center gap-12 text-sm lg:text-xl 2xl:text-2xl">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="">Demo</a>
          </li>
          <li>
            <a
              href=""
              className="text-orange px-5 py-2 border-2 bg-transparent border-orange rounded-full font-semibold hover:bg-orange hover:text-white transition"
            >
              Code Repo
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex bg-black absolute inset-0 z-[150] flex-col gap-1">
          <span className="text-orange absolute right-5 top-3" onClick={closeOverlay}>x</span>
          <ul className="flex mt-10 flex-col items-center gap-12 text-sm lg:text-xl 2xl:text-2xl">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Demo</a>
            </li>
            <li>
              <a
                href=""
                className="text-orange px-5 py-2 border-2 bg-transparent border-orange rounded-full font-semibold hover:bg-orange hover:text-white transition"
              >
                Code Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
