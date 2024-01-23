import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const history = useNavigate();

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-lg font-bold">
        Quick Recruitment
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300" onClick={() => history('/')}>Home</button>
        <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={() => history('/add')}>
          Add Candidate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
