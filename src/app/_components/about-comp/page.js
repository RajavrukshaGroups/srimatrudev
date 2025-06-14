"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import landImg from "../../_components/assets/land.jpg";
import Link from "next/link";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Driving Success Through Innovation and Sustainable,
              Customer-Focused Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission is to provide innovative and sustainable solutions
              that drive success and growth for our clients. We are dedicated to
              excellence, integrity, and customer satisfaction in every project
              we undertake. By leveraging cutting-edge technology and industry
              expertise, we ensure impactful results and long-term partnerships.
            </p>
          </>
        );
      case "vision":
        return (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision for the Future
            </h3>
            <p className="text-gray-600 mb-6">
              Our vision is to be a global leader in digital innovation,
              transforming industries and improving lives through cutting-edge
              technology and sustainable practices. We aim to create a future
              where technology and humanity coexist harmoniously, driving
              progress and prosperity for all.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Your trusted partner in the digital realm, we specialize in creating
          products that not only look stunning but also deliver seamless user
          experiences.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <button
            onClick={() => setActiveTab("mission")}
            className={`text-gray-600 border-b-2 ${
              activeTab === "mission" ? "border-green-600" : "border-transparent"
            } hover:border-gray-800`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`text-gray-600 border-b-2 ${
              activeTab === "vision" ? "border-green-600" : "border-transparent"
            } hover:border-gray-800`}
          >
            Our Vision
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={landImg}
              alt="Team Working"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            {renderContent()}
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
              <Link href="/contact">Get In Touch</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
