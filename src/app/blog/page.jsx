"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowUpRight,
  Search,
  ChevronRight,
  Bookmark,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Elderly Care",
    title: "10 Tips for Ensuring Mental Wellness in Seniors",
    excerpt:
      "Mental health is just as important as physical health. Discover how simple daily interactions can change lives...",
    author: "Dr. Sarah Rahman",
    date: "Dec 24, 2025",
    readTime: "6 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1663036892289-f19453cb7915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    category: "Child Safety",
    title: "How to Choose the Right Nanny for Your Newborn",
    excerpt:
      "Trust is built on transparency. We break down the checklist you need before hiring a caregiver...",
    author: "James Wilson",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1681884039832-a6fd52b7587c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 3,
    category: "Health & Recovery",
    title: "The Role of Nutrition in Post-Surgery Recovery",
    excerpt:
      "What we eat dictates how we heal. Explore the best foods for patients recovering from major surgery...",
    author: "Ayesha Khan",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1725557640487-811c7e9bc7a6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100",
  },
];

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-md text-blue-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-8">
      <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {post.readTime}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
        {post.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="flex items-center gap-3">
          <img
            src={post.authorImage}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-50"
            alt={post.author}
          />
          <span className="text-sm font-semibold text-slate-700">
            {post.author}
          </span>
        </div>
        <button className="text-blue-600 hover:text-blue-800 transition-colors">
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFEFF]">
      {/* --- Featured Post Section --- */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col lg:flex-row gap-12 items-center bg-blue-900 rounded-[40px] p-8 lg:p-16 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

            <div className="lg:w-1/2 relative z-10">
              <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-6">
                Featured Article
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Why Human Connection is the Core of Professional Care
              </h1>
              <p className="text-blue-100 text-lg mb-8 opacity-80">
                Technological advancements in caregiving are great, but nothing
                replaces the warmth of a human touch. Learn why empathy is our
                top priority.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                />
                <div>
                  <p className="font-bold">By Dr. Sarah Rahman</p>
                  <p className="text-sm text-blue-300">
                    Director of Clinical Care
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2"
              >
                Read Full Story <ArrowUpRight size={20} />
              </motion.button>
            </div>

            <div className="lg:w-1/2 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                alt="Featured"
                className="rounded-[30px] shadow-2xl ring-8 ring-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Search & Categories --- */}
      <section className="py-12 border-y border-slate-100 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {[
              "All Posts",
              "Elderly Care",
              "Baby Sitting",
              "Medical Support",
              "Wellbeing",
            ].map((cat, i) => (
              <button
                key={i}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-blue-600 text-white"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* --- Article Grid --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Repeated mapping of blogPosts to simulate "Infinite" variety */}
            {[...blogPosts, ...blogPosts, ...blogPosts].map((post, idx) => (
              <BlogCard key={idx} post={post} index={idx} />
            ))}
          </div>

          {/* Loading Indicator for "Infinity" Feel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center mt-20"
          >
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 font-medium">
              Loading more stories...
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Newsletter --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <User size={30} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Informed
          </h2>
          <p className="text-slate-500 mb-10">
            Join 5,000+ families receiving our weekly guide on home care and
            health safety.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
              Subscribe <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
