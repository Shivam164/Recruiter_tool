import React, { useState, useEffect, useContext } from 'react';
import { NotificationContext } from '../Contexts/GlobalState';

const Notification = () => {
  const { isNotificationVisible, setIsNotificationVisible, notificationMessage, notificationColor } = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Automatically close the notification after 5 seconds
      handleClose();
    }, 5000);

    console.log("isNotificationVisible:", isNotificationVisible);
    console.log("notificationColor:", notificationColor);
    return () => clearTimeout(timer);
  }, [isNotificationVisible]);

  const handleClose = () => {
    setIsNotificationVisible(false);
  };

  return (
    <>
      {isNotificationVisible && <div
        className={`fixed bottom-0 right-0 m-4 p-4 ${notificationColor} text-white rounded shadow-md transform transition-transform transition-opacity`}
      >
        <div className="flex items-center justify-between">
          <div>{notificationMessage}</div>
        </div>
      </div>}
    </>
    
  );
};

export default Notification;
