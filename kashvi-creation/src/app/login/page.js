"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Link from "next/link";
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './page.css'; // Import CSS for styling

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <Navbar />
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <p className="text-center text-2xl font-bold mb-6">Kashvi Creation</p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <p className="text-right text-sm text-gray-600 underline cursor-pointer">Forgot Password?</p>
          <button type="submit" className="bg-slate-400 text-white font-bold rounded-full py-2 shadow-md hover:bg-slate-500">Log in</button>
        </form>

        <Link href={"/signup"}>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <span className="text-blue-500 font-bold cursor-pointer">Sign up</span>
          </p>
        </Link>

        {/* Social Login Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="flex items-center justify-center border-2 border-gray-500 text-gray-700 py-2 rounded-full shadow-md hover:bg-gray-200">
            <span className="mr-2">🔵</span> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
