import "./contactform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="contact-title mb-5">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-lg">
          Reach out to us for any inquiries, support, or feedback. We’re here to
          help!
        </p>
      </div>

      <div className="contact-page flex flex-wrap gap-8">
        <div className="contact-info flex-1 p-4 ml-12">
          <div>
            <p className="font-bold text-2xl">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="mr-2 mb-1 text-lg"
                // Adjust size using text-lg (or try text-sm)
              />
              Location:
            </p>
            <p className="ml-9 mt-1">
              #35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi Layout, Hebbal
              Kempapura, Bengaluru-560024
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-lg" // Adjust size using text-lg
              />
              Phone:
            </p>
            <p className="ml-9 mt-1">99 4564 6095</p>
            <p className="ml-9 mt-1">81 0563 1073</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-lg" // Adjust size using text-lg
              />
              Email:
            </p>
            <p className="ml-9 mt-1">enquiry@srimatru.com</p>
          </div>
        </div>

        <div
          className="contact-form flex-1 p-4 rounded-lg shadow-md mr-12"
          style={{ backgroundColor: "white" }}
        >
          <form>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full py-5 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full py-5 p-2 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Subject"
              className="w-full py-5 mb-3 p-2 border border-gray-300 rounded"
            />
            <textarea
              type="text"
              placeholder="Enter Message"
              className="w-full py-3 mb-3 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
