import LogoIcon from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import Button from "../components/Button";

const Header = () => {
  const navLinks = "text-white/70 xl:text-2xl hover:text-white transition";
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container xl:max-w-7xl">
        <div className="flex justify-between items-center gap-4 md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl xl:max-w-4xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className={navLinks}>
                Features
              </a>
              <a href="#" className={navLinks}>
                Developers
              </a>
              <a href="#" className={navLinks}>
                Pricing
              </a>
              <a href="#" className={navLinks}>
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header