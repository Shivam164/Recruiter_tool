import React, { useContext, useState } from 'react';
import { addCandidate } from '../shared/api';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from '../Contexts/GlobalState';

const AddCandidate = () => {

  const history = useNavigate();
  const { setIsNotificationVisible, setNotificationMessage, setNotificationColor} = useContext(NotificationContext);

  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    phone: '',
    reactJS: '',
    nodeJS: '',
    current_status: '',
    expected_salary: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await addCandidate(formData);
      setNotificationColor("bg-green-500");
      setNotificationMessage("Candidate Added Successfully!!");
      setIsNotificationVisible(true);
      history('/');
    }catch(error){
      setNotificationMessage("Failed to Save!");
      setNotificationColor("bg-red-500");
      setIsNotificationVisible(true);
    }
  };

  return (
    <>    
      <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Candidate</h2>
        <form onSubmit={handleSubmit}>

          {/* Name Field  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Email Field  */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="emailId"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Phone Number Field  */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Current Status Field  */}
          <div className="mb-4">
            <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-600">
              Current Status
            </label>
            <select
              id="currentStatus"
              name="current_status"
              value={formData.currentStatus}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-white"
              required
            >
              <option value="">Select Status</option>
              <option value="Contacted">Contacted</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Offer Extended">Offer Extended</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Expected Salary Field  */}
          <div>
              <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-600">
                  Expected Salary
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                  type="text"
                  name="expected_salary"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  onChange={handleChange}
                  required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                      Currency
                  </label>
                  <select
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                  </select>
                  </div>
              </div>
          </div>

          {/* Experience in ReactJS  */}
          <div className='mt-4'>
              <label htmlFor="reactExperience" className="block text-sm font-medium text-gray-600">
                  Experience in ReactJS
              </label>
              <input
                  type="text"
                  id="reactExperience"
                  name="reactJS"
                  value={formData.reactExperience}
                  onChange={handleChange}
                  pattern="[0-9]+"  // Allow only positive integer values
                  title="Please enter a positive integer value"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
              />
          </div>

          {/* Experience in NodeJS  */}
          <div className="my-4">
          <label htmlFor="nodeExperience" className="block text-sm font-medium text-gray-600">
              Experience in NodeJS
          </label>
          <input
              type="text"
              id="nodeExperience"
              name="nodeJS"
              value={formData.nodeExperience}
              onChange={handleChange}
              pattern="[0-9]+"
              title="Invalid detail"
              className="mt-1 p-2 w-full border rounded-md"
              required
          />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCandidate;
