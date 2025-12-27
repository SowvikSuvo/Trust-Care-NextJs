"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* --- Hero Section --- */}
      <section className="bg-blue-900 pt-24 pb-48 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Connect With Care
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg md:text-xl">
            Our team is ready to assist you with any inquiries regarding our
            professional childcare and elderly care services.
          </p>
        </motion.div>
      </section>

      {/* --- Contact & Form Section --- */}
      <section className="container mx-auto px-6 -mt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "+880 1234-567890",
                sub: "24/7 Emergency Line",
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: "support@care.xyz",
                sub: "Response within 2 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                detail: "Banani, Dhaka-1213",
                sub: "Bangladesh",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 flex items-center space-x-4 hover:border-blue-200 transition-colors"
              >
                <div className="bg-blue-600 p-3 rounded-xl text-white">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.detail}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Connect Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white"
            >
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <ExternalLink className="mr-2" size={20} /> Let's Be Social
              </h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                    className="bg-white/20 p-4 rounded-full transition-colors"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-50"
          >
            <div className="flex items-center space-x-3 mb-10">
              <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-blue-900">
                Send Us a Direct Message
              </h2>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  How can we help?
                </label>
                <textarea
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 bg-blue-600 text-white font-extrabold py-5 rounded-2xl flex items-center justify-center space-x-3 shadow-lg shadow-blue-200"
              >
                <span>Send Request</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* --- Office Map Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-blue-100"
        >
          <div className="p-8 border-b border-blue-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                Our Corporate Presence
              </h2>
              <p className="text-gray-500">
                Find us in the heart of Dhaka's business district.
              </p>
            </div>
            <div className="flex bg-blue-50 p-1 rounded-xl">
              <button className="px-6 py-2 bg-white text-blue-900 rounded-lg shadow-sm font-bold text-sm">
                Banani Office
              </button>
              <button className="px-6 py-2 text-gray-500 font-bold text-sm">
                Gulshan Center
              </button>
            </div>
          </div>
          <div className="h-[450px] w-full relative bg-slate-200">
            {/* Interactive Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.538596001007!2d90.3956!3d23.7927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c679a83a5%3A0xb39c8942519392db!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1716450000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale-[20%] contrast-[1.1]"
            ></iframe>

            {/* Floating Map Label */}
            <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-xl border border-blue-100 hidden md:block max-w-[200px]">
              <p className="text-xs font-bold text-blue-600 mb-1">
                TRUST CARE HQ
              </p>
              <p className="text-sm font-medium text-gray-800 leading-tight">
                House #63, Road #04, Block #C, Banani
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
