import React, { useState } from 'react';
import Logo from '../Components/LandingPage/Navbar/Logo';
import Button from '../Components/LandingPage/Navbar/Button';
import Input from '../Components/Auth/Input';
import Swal from "sweetalert2";
import emailValidator from '../helpers/emailValidator';
import login from "../api/auth/login.api";
import authRedictHandler from "../handlers/authRedictHandler";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  authRedictHandler();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if(!email || !password) {
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

    try {
      Swal.fire({
        title: "Authenticating...",
        allowOutsideClick: false,
        
        didOpen: () => {
          Swal.showLoading()
        }
      });

      const res = await login(email, password);

      if(res.data?.success) {
        Swal.fire({
          title: res.data.message,
          text: "Welcome Back, " + res.data.user.name,
          icon: "success"
        }).then(() => { window.location.href = "/dashboard" })
      } else {
        Swal.fire({
          title: "Error While Logging",
          text: "Invalid Credentials",
          icon: "error"
        })
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
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-500 hover:text-green-400">
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full py-2 text-lg">
            Sign In
          </Button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <a href="/register" className="text-green-500 hover:text-green-400 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;