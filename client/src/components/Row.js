import React, { useContext, useState } from 'react'
import StatusPill from './StatusPill'
import { deleteCandidate } from '../shared/api';
import { NotificationContext } from '../Contexts/GlobalState';
import { useNavigate } from 'react-router-dom';


export function Row({Name, Email, Phone, ReactJS, NodeJS, Score, Current_Status, Expected_Salary, UpdateTable, ApplicantID}) {

  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { isNotificationVisible, setIsNotificationVisible, setNotificationMessage, setNotificationColor} = useContext(NotificationContext);
  const history = useNavigate();

  const handleDelete = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this item?');
    if(isConfirmed){
      try{
        await deleteCandidate(Email);
        await UpdateTable();
        setNotificationColor("bg-yellow-500");
        setNotificationMessage("Deleted Successfully!!");
        setIsNotificationVisible(true);
      }catch(error){
        setError("Failed to delete!");
      }
    }
  }

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div className='flex bg-white-50 group px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
          <div className='flex-1 px-2 truncate'>{Name}</div>
          <div className='flex-1 px-2 truncate'>{Email}</div>
          <div className='flex-1 px-2 truncate'>{Phone}</div>
          <div className='flex-1 px-2 truncate'>{ReactJS}</div>
          <div className='flex-1 px-2 truncate'>{NodeJS}</div>
          <div className='flex-1 px-2 truncate'>{Score}</div>
          <div className='flex-1 px-2 truncate'><StatusPill value = {Current_Status}/></div>
          <div className='flex-1 px-2 truncate'>{Expected_Salary}</div>
          <div className='flex flex-1 px-2'>
            <button className='px-1 flex-auto text-green-800' onClick={handleToggle}>{isVisible? 'Hide':'View'}</button>
            <button className='px-1 flex-auto text-bule-800' onClick={() => history(`/edit/${ApplicantID}`)}>Edit</button>
            <button className='px-1 flex-auto text-red-800' onClick={handleDelete}>Delete</button>
          </div>
      </div>
      {isVisible &&
        <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{Name}</div>
            <div className="text-gray-700 text-base flex justify-between"><p>Email</p> <p>{Email}</p></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Phone No.</p> <p>{Phone}</p></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Experience in ReactJS</p> <p>{ReactJS}</p></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Experience in NodeJS</p> <p>{NodeJS}</p></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Score</p> <p>{Score}</p></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Current Status</p> <StatusPill value = {Current_Status}/></div>
            <div className="text-gray-700 text-base flex justify-between"><p>Expected Salary</p> <p>{Expected_Salary}</p></div>
          </div>
          <div className="px-6 py-4">
            {/* Additional details or actions can be added here */}
          </div>
        </div>
      }
    </>
  )
}

export function RowHeader() {
  return (
    <div className='flex bg-gray-100 group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
        <div className='flex-1 px-2'>Name</div>
        <div className='flex-1 px-2'>Email</div>
        <div className='flex-1 px-2'>Phone no.</div>
        <div className='flex-1 px-2'>ReactJS Experience</div>
        <div className='flex-1 px-2'>NodeJS Experience</div>
        <div className='flex-1 px-2'>Score</div>
        <div className='flex-1 px-2'>Current Status</div>
        <div className='flex-1 px-2'>Expected Salary</div>
        <div className='flex flex-1 px-2'>
          <div></div>
        </div>
    </div>
  )
}