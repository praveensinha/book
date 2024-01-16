import { createContext, useState } from 'react';

export const RelationContext = createContext();

export const RelationProvider = ({ children }) => {
  const [objId, setobjId] = useState(null);

  const setVariable = (value) => {
    setobjId(value);
  };

  return (
    <RelationContext.Provider value={{ objId, setVariable }}>
      {children}
    </RelationContext.Provider>
  );
};