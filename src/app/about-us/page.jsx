"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Clock, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compassionate Care <br />
              <span className="text-blue-300">You Can Trust.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              At Trust Care, we bridge the gap between families and professional
              caregivers. Our mission is to make high-quality home care
              accessible, secure, and effortless for every household in the
              country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Mission & Vision --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1681996629585-88965b0d5c83?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caregiving"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6 font-sans">
              Helping Families Breathe Easier
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Trust Care was born out of a simple need: finding reliable help
              shouldn't be a stressful ordeal. Whether it's a helping hand for
              your elderly parents or a gentle sitter for your newborn, we
              ensure that every caregiver on our platform is vetted and
              professional.
            </p>
            <ul className="space-y-4">
              {[
                "Rigorous NID-verified background checks",
                "Specialized care for chronic illness",
                "Real-time booking and scheduling",
                "Dedicated 24/7 support for families",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-blue-600 mr-3 h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- Stats/Values Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              variants={fadeIn}
              className="p-8 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Secure & Safe
              </h3>
              <p className="text-gray-600 text-sm">
                Every booking is insured and every caregiver is thoroughly
                screened.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-8 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Human Touch
              </h3>
              <p className="text-gray-600 text-sm">
                We don't just provide services; we provide companionship and
                empathy.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-8 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-sm">
                Book a caregiver anytime, anywhere, based on your specific
                needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to find the perfect caregiver?
            </h2>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto">
              Join thousands of families who trust, Trust Care for their daily
              care needs. Safe, secure, and professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
