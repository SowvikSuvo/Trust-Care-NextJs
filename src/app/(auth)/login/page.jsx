"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";

// 1. Separate the form logic into a sub-component
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // This is safe here because this component is wrapped in Suspense below
  const redirect = searchParams.get("redirect") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push(redirect);
    } catch (err) {
      setError(
        err.code === "auth/user-not-found" || err.code === "auth/wrong-password"
          ? "Invalid email or password"
          : "Something went wrong. Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-8 md:p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
          Welcome <span className="text-blue-600">Back</span>
        </h2>
        <p className="text-gray-500 font-medium">
          Securely login to your account
        </p>
      </div>

      {error && (
        <p className="bg-red-100 text-red-600 p-3 rounded-xl text-center text-sm font-bold mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="text-xs font-black text-gray-700 ml-2 uppercase tracking-widest">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 font-medium text-black outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center ml-2 mr-2">
            <label className="text-xs font-black text-gray-700 uppercase tracking-widest">
              Password
            </label>
            <Link
              href="#"
              className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-tighter"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-blue-500 font-medium text-black outline-none"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 h-auto rounded-2xl text-lg font-black uppercase tracking-widest mt-2 text-white transition shadow-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-95"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-500 font-bold text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

// 2. The default export wraps the form in a Suspense Boundary
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4">
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center bg-white p-12 rounded-[3rem] shadow-xl">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-blue-900 font-bold uppercase tracking-widest text-sm">
              Loading Secure Portal...
            </p>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
