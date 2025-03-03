import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

  // Variables to Carry Across Multiple Pages
  const [user, setUser] = useState(null)
  const [prevDest, setPrev] = useState("/")

  const router = useRouter()
  const { asPath } = useRouter()



return(
    <Context.Provider
    value={{
        user,
        setUser,
        prevDest,
        setPrev
    }}
    >
      {children}
    </Context.Provider>

    )
}

export const useStateContext = () => useContext(Context);
