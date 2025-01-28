"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import contactImg from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

import style from "./contactform.module.css";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [phoneError, setPhoneError] = useState(""); // State for phone validation error
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage(""); // Clear previous messages
    setPhoneError(""); // Clear previous phone validation errors

    // Get phone number value
    const phoneNumber = formRef.current.user_phone.value;

    // Validate phone number length (must be 10 digits)
    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      setIsSending(false);
      return; // Prevent form submission if validation fails
    }

    try {
      const response = await emailjs.sendForm(
        "service_3vjn6gl",
        "template_srimatru",
        formRef.current,
        { publicKey: "1sGP_RSYTqppduTDb" }
      );

      if (response.status === 200) {
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset(); // Clear the form after success
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setSuccessMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`${style.container} mx-auto p-4`}>
      <div className={`${style.contactTitle} mb-5 text-center`}>
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-lg">
          Reach out to us for any inquiries, support, or feedback. We’re here to
          help!
        </p>
      </div>

      <div className={`${style.contactPage} flex flex-wrap gap-8`}>
        <div className={`${style.contactInfo} flex-1 p-4`}>
          <div className="flex items-start mb-6">
            <FontAwesomeIcon
              icon={faHouseUser}
              // style={{ height: "30px", marginTop: "-5px" }}
              className="mr-4 text-indigo-600"
            />
            <div>
              <p className="font-bold text-xl">Location:</p>
              <p className="mt-1 text-gray-700">
                #35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi Layout,
                Hebbal Kempapura, Bengaluru-560024
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ height: "20px", marginTop: "2px" }}
              className="mr-4 text-indigo-600"
            />
            <div>
              <p className="font-bold text-xl">Phone:</p>
              <p className="mt-1 text-gray-700">99 4564 6095</p>
              <p className="mt-1 text-gray-700">81 0563 1073</p>
            </div>
          </div>

          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ height: "20px", marginTop: "3px" }}
              className="mr-4 text-indigo-600"
            />
            <div>
              <p className="font-bold text-xl">Email:</p>
              <p className="mt-1 text-gray-700">enquiry@srimatru.com</p>
            </div>
          </div>
        </div>
        <div className={`${style.contactImg} shadow-lg rounded-lg`}>
          <Image src={contactImg} alt="contact" width={500} height={300} />
        </div>
      </div>

      <div
        className={`${style.contactDetails} flex flex-wrap gap-20 justify-between items-start`}
      >
        <div className={`${style.contactForm} flex-1 p-6 rounded-lg`}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Enter Name"
                className="w-full py-3 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full py-3 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="w-full py-3 mb-4 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="number"
              name="user_phone"
              placeholder="Enter Phone Number"
              className="w-full py-3 mb-4 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
              minLength={10}
              maxLength={10}
              required
            />
            {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
            <textarea
              name="message"
              placeholder="Enter Message"
              className="w-full py-3 px-4 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-lg font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Let's talk"}
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-center">{successMessage}</p>
          )}
        </div>

        <div className={`${style.mapContainer} flex-1`}>
          <div className="mapouter rounded-lg shadow-lg">
            <div className="gmap_canvas g_map">
              <iframe
                width="100%"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Rajavruksha+Groups%2Chebbal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
