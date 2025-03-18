import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="wrapper w-[88%] mx-auto pt-[29px]">
        <div className=" flex justify-between gap-[8px] pl-[40px] pr-[40px]">
          <div>
            <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
              HOSTING
            </h4>
            <ul className="mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A]">
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
            <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
              DOMAIN
            </h4>
            <ul className="mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A]">
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
            <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
              TOOLS
            </h4>
            <ul className="mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A]">
              <li>Website Builder</li>
              <li>AI Website Builder</li>
              <li>eCommerce Website Builder</li>
              <li>Business Name Generator</li>
              <li>AI Logo Generator</li>
              <li>Migrate to Hostinger</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
              INFORMATION
            </h4>
            <ul className="mt-2 space-y-2 text-[13px] leading-[24px] text-[#2F1C6A]">
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
            <h4 className="font-bold text-[#2F1C6A] leading-[24px] text-[18px]">
              COMPANY
            </h4>
            <ul className="mt-2 space-y-2 leading-[24px] text-[13px] text-[#2F1C6A]">
              <li>About Hostinger</li>
              <li>Our technology</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold leading-[24px] text-[#2F1C6A] text-[18px]">
              SUPPORT
            </h4>
            <ul className="mt-2 space-y-2 leading-[24px] text-[13px] text-[#2F1C6A]">
              <li>Tutorials</li>
              <li>Knowledge Base</li>
              <li>Contact us</li>
              <li>Report Online Abuse</li>
            </ul>
          </div>
        </div>
        <div className=" mt-6 pt-4 text-center text-sm">
          <div className="flex justify-between  border-b">
            <div className="pl-[33px]">
              <div className="my-4">
                <img
                  src="/images/bluehost.png"
                  alt="Hostinger"
                  className="h-8"
                />
              </div>
              <div className="flex items-center space-x-4 my-4">
                <img
                  src="/images/visa.png"
                  alt="Visa"
                  className="h-[2.3rem] border border-[#bfdbfe] rounded-[6px]"
                />
                <img
                  src="/images/chromo.png"
                  alt="Mastercard"
                  className="h-[2.3rem] border border-[#bfdbfe]  rounded-[6px]"
                />
                <img
                  src="/images/discover.png"
                  alt="Discover"
                  className="h-[2.3rem] border border-[#bfdbfe]  rounded-[6px]"
                />
                <img
                  src="/images/dinners.png"
                  alt="Diners Club"
                  className="h-[2.3rem] border border-[#bfdbfe]  rounded-[6px]"
                />
                <img
                  src="/images/rupay.png"
                  alt="RuPay"
                  className="h-[2.3rem] border border-[#bfdbfe]  rounded-[6px]"
                />
                <span className="text-sm text-[#673DE6] font-semibold">
                  and more
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-end space-x-4 my-4 text-2xl">
                <div className="bg-[#2F1C6A] p-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="text-white"
                  />
                </div>
                <div className="bg-[#2F1C6A] p-2 rounded-md">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                </div>
                <div className="bg-[#2F1C6A] p-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="text-white"
                  />
                </div>
                <div className="bg-[#2F1C6A] p-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="text-white"
                  />
                </div>
                <div className="bg-[#2F1C6A] p-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="text-white"
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-6 my-4 text-sm">
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
          <div className="flex justify-between">
            <div>
              <p>
                &copy; 2004-2025 Hostinger.in - Premium Web Hosting & Domain
                Registration Services.
              </p>
            </div>
            <div>
              <p className="mt-2">Prices are listed without GST</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
