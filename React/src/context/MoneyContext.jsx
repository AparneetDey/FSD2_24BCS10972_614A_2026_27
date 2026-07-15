import React, { createContext, useContext, useState } from 'react'

const MoneyContext = createContext();

export const MoneyProvider = ({children}) => {
  const [money, setMoney] = useState(0);

  const value = {
    money,
    setMoney
  }

  return (
    <MoneyContext.Provider value={value}>
      {children}
    </MoneyContext.Provider>
  )
}

export const useMoney = () => {
  const context = useContext(MoneyContext);
  if(context) return context;
}