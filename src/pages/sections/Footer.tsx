import Logo from "../../assets/logo.svg";
import XSocial from "../../assets/social-x.svg";
import InstaSocial from "../../assets/social-instagram.svg";
import YTSocial from "../../assets/social-youtube.svg";

const Footer = () => {
  const footerLinks = "text-white/70 hover:text-white text-xs md:text-sm xl:text-xl transition";
  const footerSocials = "text-white/40 hover:text-white transition cursor-pointer transition-colors";
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-auto" />
            <div className="font-medium xl:text-xl">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 text-center">
            <a className={footerLinks} href="#">
              Features
            </a>
            <a className={footerLinks} href="#">
              Developers
            </a>
            <a className={footerLinks} href="#">
              Company
            </a>
            <a className={footerLinks} href="#">
              Blog
            </a>
            <a className={footerLinks} href="#">
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className={footerSocials}/>
            <InstaSocial className={footerSocials}/>
            <YTSocial className={footerSocials}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer