import { MapPin, Phone, Mail } from "lucide-react"; // Import icons
import footerImg from "../assets/footer-img.jpg"; // Footer image

import "./footer.css"; // Import the external CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Image */}
      <div className="footer-image-container">
        <img
          src={footerImg.src}
          alt="Footer Decorative"
          className="footer-image"
        />
        {/* Text Content Overlay with Blur and Green Tint */}
        <div className="footer-content-overlay">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left mt-6">
              {/* Contact Information */}
              <div className="contact-info w-full lg:w-6/12 px-4">
                <span className="footer-heading">
                  We guide you in selecting the best property that aligns with
                  your vision and goals
                </span>
                <ul className="contact-list list-none space-y-4">
                  <li className="flex items-center">
                    <MapPin className="mr-2 icon" />
                    <span className="text-md text-gray-300 hover:font-bold hover:text-white">
                      <a href="#">Hebbal,Bengaluru</a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 icon" />
                    <span className="text-md text-gray-300 hover:font-bold hover:text-white">
                      <a href="#">+91 9945 646 095</a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 icon" />
                    <span className="text-md text-gray-300 hover:font-bold hover:text-white">
                      <a href="#">+91 8105 631 073</a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 icon" />
                    <span className="text-md text-gray-300 hover:font-bold hover:text-white">
                      <a href="#">contact@srimatrudevelopers.com</a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="useful-links w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="links-column w-full lg:w-4/12 px-4 ml-auto">
                    <span className="footer-heading">Useful Links</span>
                    <ul className="links-list list-none space-y-2">
                      <li>
                        <a
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                          href="#"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                          href="#"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="resources-column w-full lg:w-4/12 px-4">
                    <span className="footer-heading">Other Resources</span>
                    <ul className="resources-list list-none space-y-2">
                      <li>
                        <a
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                          href="#"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                          href="#"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
