"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './page.css'; // Import CSS for styling

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful');
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <Navbar/>
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
        {/* Signup Form */}
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 border rounded-md outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border rounded-md outline-none"
          />

          <button type="submit" className="bg-slate-400 text-white py-2 rounded-md hover:bg-slate-500 transition">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-2 text-blue-500 text-sm">or sign up with</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-2">
         
          <button className="flex items-center justify-center border-2 border-gray-500 text-gray-700 py-2 rounded-full shadow-md hover:bg-gray-200">
            <span className="mr-2">🔵</span> Sign up with Google
          </button>
        </div>

        {/* Already have an account? */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-600 font-semibold">Log in</a>
        </p>
      </div>
    </div>
  );
}
