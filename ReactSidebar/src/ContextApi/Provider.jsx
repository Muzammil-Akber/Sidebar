import {  useContext, useState } from 'react';
import Themecontext from './Context';



export const Themeprovider = ({ children }) => {
  const [Contextdata, SetContextdata] = useState([
    {
      themeMode: "light"
    }
  ]);

  return (
    <Themecontext.Provider value={{ Contextdata, SetContextdata }}>
      {children}
    </Themecontext.Provider>
  );
};

export const usetheme = () => {
  return useContext(Themecontext);
};
