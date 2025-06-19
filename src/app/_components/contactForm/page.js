"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import style from "./contactform.module.css";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setPhoneError("");

    const phoneNumber = formRef.current.user_phone.value;

    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      toast.error("Phone number must be exactly 10 digits");
      setIsSending(false);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_4uge6ur",
        "template_0w116ux",
        formRef.current,
        { publicKey: "23Q4IevuGUIJvosAC" }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully");
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send the message. Please try again later.");
      setSuccessMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black">Contact Us</h1>
          <p className="text-lg text-black">
            Reach out to us for any inquiries, support, or feedback. We’re here
            to help!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg border border-green-300">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter Name"
                  className="w-full py-3 px-4 border border-green-300 rounded focus:ring-2 focus:ring-green-400 text-black"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full py-3 px-4 border border-green-300 rounded focus:ring-2 focus:ring-green-400 text-black"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="w-full py-3 mb-4 px-4 border border-green-300 rounded focus:ring-2 focus:ring-green-400 text-black"
                required
              />
              <input
                type="number"
                name="user_phone"
                placeholder="Enter Phone Number"
                className="w-full py-3 mb-4 px-4 border border-green-300 rounded focus:ring-2 focus:ring-green-400 text-black"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm mb-2">{phoneError}</p>
              )}
              <textarea
                name="message"
                placeholder="Enter Message"
                className="w-full py-3 px-4 mb-4 border border-green-300 rounded focus:ring-2 focus:ring-green-400 text-black"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-md shadow hover:bg-green-500 transition"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Let's talk"}
              </button>
            </form>
            {successMessage && (
              <p className="mt-4 text-center text-green-600 font-medium">
                {successMessage}
              </p>
            )}
          </div>
          <div className="flex-1 grid gap-6">
            {/* Location */}
            <div className="flex items-start bg-green-50 border border-green-200 p-5 rounded-xl shadow hover:shadow-md transition">
              <div className="w-12 h-12 aspect-square flex items-center justify-center bg-green-600 text-white rounded-full mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-black">Location</p>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  #38, 1st Main Road, 5th Cross, Jayamuni Nagar, Baglur Cross,
                  Yelahanka, Bangalore-560063
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start bg-green-50 border border-green-200 p-5 rounded-xl shadow hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-black">Phone</p>
                <p className="text-gray-700 text-sm mt-1">+91 9945 646 095</p>
                <p className="text-gray-700 text-sm">+91 8058 060 320</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start bg-green-50 border border-green-200 p-5 rounded-xl shadow hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-black">Email</p>
                <p className="text-gray-700 text-sm mt-1">
                  srimatrudevelopers@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
