"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import landImg from "../../_components/assets/land.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const contentMap = {
    mission: [
      "At Sri Matru Developers, our mission is to transform the real estate landscape by creating innovative, sustainable, and high-quality spaces that meet the evolving needs of our clients and communities.",
      "We are committed to delivering exceptional developments that not only enhance the way people live and work but also contribute to the growth and vitality of the areas we serve.",
      "With a focus on integrity, customer satisfaction, and long-term value, we strive to build lasting relationships and spaces that stand the test of time.",
    ],
    vision: [
      "At Sri Matru Developers, we envision a future where every project we undertake not only reshapes skylines but also enhances communities and lives.",
      "We aspire to be pioneers in innovative real estate development, blending cutting-edge design, sustainability, and thoughtful planning to create spaces that inspire connection, growth, and prosperity.",
      "Our goal is to redefine the way people experience urban and residential living, building environments that are not only functional but truly transformative for the generations to come.",
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We’re dedicated to reshaping real estate through innovation,
            sustainability, and a customer-first approach.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-6 mb-10">
          {["mission", "vision"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-medium border-b-2 pb-1 transition-all ${
                activeTab === tab
                  ? "text-green-600 border-green-600"
                  : "text-gray-600 border-transparent hover:border-gray-400"
              }`}
            >
              {tab === "mission" ? "Our Mission" : "Our Vision"}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={landImg}
              alt="About Sri Matru Developers"
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                {contentMap[activeTab].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </AnimatePresence>
            <div className="mt-8">
              <Link href="/contact">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors">
                  Get In Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
