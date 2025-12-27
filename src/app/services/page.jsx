"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  UserRound,
  Stethoscope,
  Moon,
  HeartPulse,
  BrainIcon,
  Home,
  GraduationCap,
  CalendarClock,
  ShieldPlus,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Newborn Care",
    desc: "Specialized support for infants, including feeding, sleep training, and hygiene.",
    icon: Baby,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Elderly Companionship",
    desc: "Emotional support and daily activity assistance for your senior loved ones.",
    icon: UserRound,
    color: "bg-indigo-500",
  },
  {
    id: 3,
    title: "Post-Surgery Care",
    desc: "Medical recovery assistance at home with professional care monitoring.",
    icon: Stethoscope,
    color: "bg-cyan-500",
  },
  {
    id: 4,
    title: "Overnight Care",
    desc: "24/7 peace of mind with dedicated caregivers staying through the night.",
    icon: Moon,
    color: "bg-blue-900",
  },
  {
    id: 5,
    title: "Special Needs Support",
    desc: "Compassionate care tailored for individuals with physical or cognitive disabilities.",
    icon: HeartPulse,
    color: "bg-blue-600",
  },
  {
    id: 6,
    title: "Dementia & Alzheimer’s",
    desc: "Patient-focused memory care to ensure safety and comfort at home.",
    icon: BrainIcon,
    color: "bg-indigo-600",
  },
  {
    id: 7,
    title: "Household Assistance",
    desc: "Help with light housekeeping, meal prep, and maintaining a healthy home.",
    icon: Home,
    color: "bg-sky-500",
  },
  {
    id: 8,
    title: "After-School Nanny",
    desc: "Safe pickup and educational support for children after school hours.",
    icon: GraduationCap,
    color: "bg-blue-700",
  },
  {
    id: 9,
    title: "Emergency Care",
    desc: "Last-minute caregiving solutions for unexpected family situations.",
    icon: ShieldPlus,
    color: "bg-blue-800",
  },
  {
    id: 10,
    title: "Hourly Respite",
    desc: "Short-term relief for primary caregivers to rest and recharge.",
    icon: CalendarClock,
    color: "bg-indigo-400",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
    >
      {/* Background Decoration */}
      <div
        className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${service.color}`}
      ></div>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}
      >
        <service.icon size={32} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        {service.desc}
      </p>

      {/* Button */}
      <button className="flex items-center text-blue-600 font-bold text-sm group/btn">
        Details
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </button>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Care Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6"
          >
            Comprehensive Care for <br /> Every Family Member
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg">
            Choose from our wide range of professional services designed to
            bring safety, comfort, and peace of mind to your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.slice(0, 8).map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}

          {/* Large Card for Featured/Emergency - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-blue-900 rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need Custom Care?</h3>
              <p className="text-blue-100 mb-8 max-w-md">
                Don't see what you're looking for? Contact us for a personalized
                care plan tailored specifically to your family's unique needs.
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Request Custom Plan
              </button>
            </div>
            {/* Abstract Design Element */}
            <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

          {services.slice(8, 10).map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx + 8} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
