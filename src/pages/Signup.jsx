import React, { useState } from 'react';
import Logo from '../Components/LandingPage/Navbar/Logo';
import Button from '../Components/LandingPage/Navbar/Button';
import Input from '../Components/Auth/Input';
import Swal from "sweetalert2";
import emailValidator from '../helpers/emailValidator';
import signup from "../api/auth/signup.api";
import authRedictHandler from '../handlers/authRedictHandler';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  authRedictHandler();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    
        if(!email || !password ||!name ||!confirmPassword) {
          Swal.fire({
            title: "Empty Fields",
            text: "Please fill all the fields",
            icon: "error"
          });
          return;
        }
    
        if(!emailValidator(email)) {
          Swal.fire({
            title: "Wrong Email Syxtax",
            text: "Please enter email with correct syntax like name@domain.com",
            icon: "error"
          });
          return;
        }

        if(confirmPassword !== password) {
          Swal.fire({
            title: "Password Mismatch",
            text: "Please enter same password in both fields",
            icon: "error"
          });
          return;
        }
    
        try {
          Swal.fire({
            title: "Creating Account...",
            allowOutsideClick: false,
            
            didOpen: () => {
              Swal.showLoading()
            }
          });
    
          const res = await signup(name, email, password);
          console.log(res)
    
          if(res.data?.success) {
            Swal.fire({
              title: res.data.message,
              text: "Welcome, " + res.data?.user.name,
              icon: "success"
            }).then(() => { window.location.href = "/login" })
          }
        } catch (error) {
          console.log(error)
          Swal.fire({
            title: "Error While Logging",
            text: "Server Error: " + error.message,
            icon: "error"
          })
        }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            required
          />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="********"
            required
          />
          <div className="mb-6">
            <label className="flex items-start text-sm text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 mt-1"
                required
              />
              <span className="ml-2">
                I agree to the{' '}
                <a href="#" className="text-green-500 hover:text-green-400">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-500 hover:text-green-400">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <Button type="submit" className="w-full py-2 text-lg">
            Sign Up
          </Button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-green-500 hover:text-green-400 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;