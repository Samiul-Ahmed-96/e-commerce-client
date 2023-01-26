import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="bg-blue-100 h-screen flex justify-center items-center rounded">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold text-blue-500 mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border border-blue-500 p-2 rounded-full w-full"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-blue-500 p-2 rounded-full w-full"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-white px-6 py-2 mr-2 rounded-full hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
          <a className="text-blue-500 hover:underline" href="#">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
