"use client";

import { Building2, Lightbulb, UserCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "End-to-End Expertise",
    icon: <Building2 className="w-8 h-8 text-[#86C232]" />,
    description:
      "We handle every aspect of real estate, from construction and development to sales and management. Whether you're buying a home, investing, or developing, we ensure a seamless experience.",
  },
  {
    title: "Innovation and Quality",
    icon: <Lightbulb className="w-8 h-8 text-[#86C232]" />,
    description:
      "Our developments combine cutting-edge design, high-quality craftsmanship, and sustainable practices. We focus on creating properties that stand the test of time, offering both aesthetic appeal and long-term value.",
  },
  {
    title: "Customer-Centric Approach",
    icon: <UserCheck className="w-8 h-8 text-[#86C232]" />,
    description:
      "Your goals are our priority. We tailor our services to match your needs and vision, ensuring every step of your real estate journey is smooth and successful.",
  },
  {
    title: "Proven Track Record",
    icon: <Award className="w-8 h-8 text-[#86C232]" />,
    description:
      "With years of experience in real estate and development, we've built a solid reputation based on trust, delivery, and client satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our passion, professionalism, and results-driven approach set us
            apart in the real estate landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div>{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
