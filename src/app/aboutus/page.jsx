"use client";
import { Building, Home, TrendingUp } from "lucide-react";
import Image from "next/image";
import landImg from "../assets/img/land.webp";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how we help you find the perfect space and investment
            opportunities tailored to your lifestyle and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Services List */}
          <div className="space-y-10">
            {[
              {
                icon: <Building className="w-9 h-9 text-[#86C232]" />,
                title: "Real Estate",
                description:
                  "Whether you're buying or selling, our team of seasoned professionals are dedicated to delivering tailored solutions. With a broad range of residential properties, we’ll help you discover the ideal space to fit your vision and needs.",
              },
              {
                icon: <Home className="w-9 h-9 text-[#86C232]" />,
                title: "Residential Development",
                description:
                  "From luxurious single-family homes to expansive residential communities, we create living spaces that are designed for comfort, convenience, and long-term value. We focus on smart design and sustainable building practices to ensure every home is a place to thrive.",
              },
              {
                icon: <TrendingUp className="w-9 h-9 text-[#86C232]" />,
                title: "Investment Opportunities",
                description:
                  "Explore our curated selection of investment properties, hand-picked for their potential for growth and long-term profitability. Our team offers valuable insights to help you make informed, strategic real estate investment decisions.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={landImg}
              alt="Real estate property"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
