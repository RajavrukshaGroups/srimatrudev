"use client";
import {
  Home,
  CheckCircle,
  Landmark,
  Lightbulb,
  MapPin,
  Banknote,
  Building2,
  Map, // ✅ replaced Road with Map
  Droplet,
  ShieldCheck,
} from "lucide-react";
const ProjectDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-4">
          Explore Our Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Take a look at our diverse range of projects, from residential
          neighborhoods to thriving commercial developments. See how we’re
          shaping the future of real estate, one project at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Highlights Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Project Highlights
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                DC Conversion Approved Layout with clear documentation.
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                Available plot sizes: 30x40 and 30x50.
              </p>
              <p className="flex items-start gap-2">
                <Banknote className="w-5 h-5 text-green-600 mt-1" />
                Bank loan facility available with clear titles.
              </p>
              <p className="flex items-start gap-2">
                <Landmark className="w-5 h-5 text-green-600 mt-1" />
                Grand entrance arch welcoming you in style.
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                KUDA Approval in progress for added value.
              </p>
            </div>

            <div className="mt-6 text-center bg-yellow-100 border border-yellow-300 text-yellow-900 font-semibold p-3 rounded-lg">
              Sites Starting from{" "}
              <span className="text-lg font-bold text-yellow-700">
                ₹6 Lakhs
              </span>{" "}
              onwards
            </div>
          </div>

          {/* Amenities Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Amenities
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="flex items-start gap-2">
                <Map className="w-5 h-5 text-green-600 mt-1" />
                Concrete roads for smooth internal connectivity.
              </p>
              <p className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-green-600 mt-1" />
                Electricity connections with modern street lighting.
              </p>
              <p className="flex items-start gap-2">
                <Droplet className="w-5 h-5 text-green-600 mt-1" />
                Underground drainage system for hygiene and safety.
              </p>
              <p className="flex items-start gap-2">
                <Building2 className="w-5 h-5 text-green-600 mt-1" />
                Civic amenity site planned for future development.
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600 mt-1" />
                Safe and secure layout ideal for families and investment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        {/* Video */}
        <video
          controls
          autoPlay
          loop
          muted
          className="rounded-xl shadow-xl w-full max-w-2xl border border-gray-300"
        >
          <source src="/video/site_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Brochure Download Button */}
        <div className="mt-6 text-center">
          <a
            href="/srimatru-update.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Download Our Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
