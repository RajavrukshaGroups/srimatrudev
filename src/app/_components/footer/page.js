"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import footerImg from "../assets/footer-img.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-image-container">
        <img
          src={footerImg.src}
          alt="Footer Decorative"
          className="footer-image"
        />

        <div className="footer-content-overlay">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left mt-6">
              {/* Contact Info */}
              <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
                <h4 className="footer-heading">
                  We guide you in selecting the best property that aligns with
                  your vision and goals
                </h4>
                <ul className="contact-list space-y-4">
                  <li className="flex items-start">
                    <MapPin className="icon mr-2 mt-1" />
                    <span className="text-md text-gray-300 hover:font-bold hover:text-white">
                      #38, 1st Main Road, 5th Cross, Jayamuni Nagar, Baglur
                      Cross, Yelahanka, Bangalore-560063
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="icon mr-2" />
                    <a
                      href="tel:+918058060320"
                      className="text-md text-gray-300 hover:font-bold hover:text-white"
                    >
                      +91 8058 060 320
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="icon mr-2" />
                    <a
                      href="tel:+919945646095"
                      className="text-md text-gray-300 hover:font-bold hover:text-white"
                    >
                      +91 9945 646 095
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="icon mr-2" />
                    <a
                      href="mailto:srimatrudevelopers@gmail.com"
                      className="text-md text-gray-300 hover:font-bold hover:text-white"
                    >
                      srimatrudevelopers@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-6/12 mb-6 sm:mb-0">
                    <h4 className="footer-heading">Useful Links</h4>
                    <ul className="links-list space-y-2">
                      <li>
                        <Link
                          href="/about"
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects"
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full sm:w-6/12">
                    <h4 className="footer-heading">Other Resources</h4>
                    <ul className="resources-list space-y-2">
                      {/* <li>
                        <Link
                          href="/termscondition"
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                        >
                          Terms & Conditions
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="/privacypolicy"
                          className="text-md text-gray-300 hover:font-bold hover:text-white"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Useful Links */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
