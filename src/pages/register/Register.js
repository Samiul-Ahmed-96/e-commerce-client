import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", passwordConfirm);
  };

  return (
    <div className="bg-blue-100 min-h-screen rounded flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-lg font-medium mb-2">Register</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="border border-blue-500 p-2 rounded-full w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="border border-blue-500 p-2 rounded-full w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-blue-500 p-2 rounded-full w-full"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 mr-2 rounded-full hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
