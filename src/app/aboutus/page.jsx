import React from 'react'

import { Leaf, Droplets, FlowerIcon as FlowerPot, Play } from "lucide-react"
import Image from "next/image"
import mainImage from '../assets/img/23.jpg'
import { motion } from "framer-motion";
const AboutUs=() =>{
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
         initial={{ x: 20, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">OUR SERVICES</h2>
          <p className="text-gray-600">We provide the perfect service for you.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Services List */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FlowerPot className="w-8 h-8 text-[#86C232]" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Plants Care</h3>
                <p className="text-gray-600">
                  In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service
                  its.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Droplets className="w-8 h-8 text-[#86C232]" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Pressure Washing</h3>
                <p className="text-gray-600">
                  In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service
                  its.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Leaf className="w-8 h-8 text-[#86C232]" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Tree Service & Trimming</h3>
                <p className="text-gray-600">
                  In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service
                  its.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Gardening service demonstration"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-[#86C232] rounded-full flex items-center justify-center hover:bg-[#78b129] transition-colors">
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default AboutUs
