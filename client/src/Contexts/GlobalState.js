import {useState, createContext} from 'react';

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
    
    const [isNotificationVisible, setIsNotificationVisible] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState("Check");
    const [notificationColor, setNotificationColor] = useState("red");

    return(
        <NotificationContext.Provider value = {{ isNotificationVisible, setIsNotificationVisible, notificationMessage, setNotificationMessage, notificationColor, setNotificationColor}}>
            {props.children}
        </NotificationContext.Provider>
    )
}