import React , { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [cartSettings, setCart] = useState(false)
    const [chatSettings, setChat] = useState(false)
    const [notificationSettings, setNotification] = useState(false)
    const [userProfileSettings, setUserProfile] = useState(false)
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value)
    
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color)
    
        setThemeSettings(false)
    }
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true});
        setCart(false);
        setChat(false);
        setNotification(false);
        setUserProfile(false)    
    }

    return (
        <StateContext.Provider 
            value={{ 
                    activeMenu, 
                    setActiveMenu, 
                    isClicked, 
                    setIsClicked, 
                    handleClick,
                    screenSize, setScreenSize,
                    currentColor,currentMode,
                    setCurrentColor, setCurrentMode,
                    themeSettings, setThemeSettings,
                    setMode, setColor,
                    cartSettings, setCart,
                    chatSettings,setChat,
                    notificationSettings, setNotification,
                    userProfileSettings, setUserProfile
                    }}
                    >
                {children}
        </StateContext.Provider>
    )
}




export const useStateContext = () => useContext(StateContext)