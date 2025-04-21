import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="wrapper w-[88%] mx-auto pt-[29px]">
        <div className="grid xl:grid-cols-6 xxl:grid-cols-6 sm:grid-cols-1 xs-md:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-4 px-[20px]">
          <div className="">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
                HOSTING
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>

            {/* List hidden on xs-md, visible on lg+ */}
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>Web hosting</li>
              <li>WordPress Hosting</li>
              <li>VPS hosting</li>
              <li>Business email</li>
              <li>Cloud hosting</li>
              <li>WooCommerce hosting</li>
              <li>Hosting for agencies</li>
              <li>Minecraft hosting</li>
              <li>Game server hosting</li>
              <li>Google Workspace</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
                DOMAIN
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>
            {/* List hidden on xs-md, visible on lg+ */}
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>Domains</li>
              <li>Cheap domains</li>
              <li>Free Domain Name</li>
              <li>WHOIS Lookup</li>
              <li>Free SSL certificate</li>
              <li>Domain transfer</li>
              <li>Domain Extensions</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
                TOOLS
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>Website Builder</li>
              <li>AI Website Builder</li>
              <li>eCommerce Website Builder</li>
              <li>Business Name Generator</li>
              <li>AI Logo Generator</li>
              <li>Migrate to Hostinger</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
                INFORMATION
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>Pricing</li>
              <li>Hostinger Reviews</li>
              <li>Afiliate program</li>
              <li>Referral program </li>
              <li>Roadmap</li>
              <li>Rewards</li>
              <li>System status</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
                COMPANY
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>About Hostinger</li>
              <li>Our technology</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold leading-[24px] text-[#2F1C6A] text-[18px]">
                SUPPORT
              </h4>
              {/* Arrow visible only on xs-md */}
              <button
                className="block lg:hidden md:hidden text-[#2F1C6A]"
                onClick={toggleMenu}
              >
                {isOpen ? <ChevronUp size={27} /> : <ChevronDown size={27} />}
              </button>
            </div>
            <ul
              className={`mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A] ${
                isOpen ? "block" : "hidden"
              } lg:block md:block`}
            >
              <li>Tutorials</li>
              <li>Knowledge Base</li>
              <li>Contact us</li>
              <li>Report Online Abuse</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 text-sm text-center md:text-left">
          <div className="border-b pb-6 md:flex md:justify-between xs-md:flex md:items-start">
            {/* Left Section - Logo and Payment Methods */}
            <div className="md:w-1/2  flex flex-col xs-md:items-start sm:items-start smx:items-start xsm:items-start xs:items-start sm:p-[15px] smx:p-[24px] xsm:p-[24px] xs:p-[14px] md:items-start">
              {/* Social Icons - visible only on small screens (above logo) */}
              <div className="flex space-x-4 text-2xl xs-md:gap-[38%] sm:gap-[30%] smx:gap-[20%] xsm:gap-[7%] xs:gap-[4%] mb-4 md:hidden">
                {[
                  faSquareFacebook,
                  faLinkedin,
                  faSquareInstagram,
                  faSquareXTwitter,
                  faSquareYoutube,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="bg-[#2F1C6A] px-2 py-1 rounded-md hover:bg-[#4B2DBA] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={icon} className="text-white" />
                  </div>
                ))}
              </div>

              {/* Logo */}
              <img
                src="/images/bluehost.png"
                alt="Hostinger"
                className="h-8 my-4"
              />

              {/* Policy Links - Centered on mobile */}
              <div className="flex justify-center xl:hidden md:w-[107%] md:justify-start gap-6 xs:gap-[7px] mb-4">
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
                <a href="#" className="hover:underline">
                  Refund policy
                </a>
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </div>

              {/* Payment icons */}
              <div className="flex justify-center md:justify-start no-wrap xsm:flex-wrap xs:flex-wrap xxs:flex-wrap xsm:justify-start xs:justify-start items-center gap-3 mb-4">
                <img
                  src="/images/visa.png"
                  alt="Visa"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <img
                  src="/images/chromo.png"
                  alt="Mastercard"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <img
                  src="/images/discover.png"
                  alt="Discover"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <img
                  src="/images/dinners.png"
                  alt="Diners Club"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <img
                  src="/images/rupay.png"
                  alt="RuPay"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <span className="text-sm text-[#673DE6] md:w-[107%] font-semibold">
                  and more
                </span>
              </div>
            </div>

            {/* Right Section - Social Icons and Policy Links for Desktop */}
            <div className="flex flex-col items-center md:items-end space-y-4 mt-6 md:mt-0">
              {/* Social Icons - visible only on md and above */}
              <div className="hidden md:flex space-x-4 text-2xl">
                {[
                  faSquareFacebook,
                  faLinkedin,
                  faSquareInstagram,
                  faSquareXTwitter,
                  faSquareYoutube,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="bg-[#2F1C6A] px-2 py-1 rounded-md hover:bg-[#4B2DBA] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={icon} className="text-white" />
                  </div>
                ))}
              </div>

              {/* Desktop-only policy links */}
              <div className=" hidden xl:flex  space-x-6 text-sm">
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
                <a href="#" className="hover:underline">
                  Refund policy
                </a>
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 flex xl:flex-row md:flex-col md:gap-[38px] text-[#271C6A] xl:text-[14px] xs-md:flex-col sm:flex-col smx:flex-col xsm:flex-col xs:flex-col text-[16px] justify-between text-left xl:text-center xl:text-[16px] smx:text-[14px] xsm:text-[14px] xs:text-[14px] px-4 md:px-[33px]">
            <p>
              &copy; 2004–2025 Hostinger.in – Premium Web Hosting & Domain
              Registration Services.
            </p>
            <p className="mt-2 md:mt-0">Prices are listed without GST</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
