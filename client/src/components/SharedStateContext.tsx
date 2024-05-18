import React, { createContext, useContext , useRef, useState} from 'react';

type SharedStateContextType = {
  programInput: React.MutableRefObject<string>;
  programOutput: string;
  setProgramOutput: React.Dispatch<React.SetStateAction<string>>;
};

const SharedStateContext = createContext<SharedStateContextType | undefined>(undefined);

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error('useSharedState must be used within a SharedStateProvider');
  }
  return context;
};

export const SharedStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const programInput = useRef<string>('');
  const [programOutput, setProgramOutput] = useState<string>('');

  return (
    <SharedStateContext.Provider value={{ programInput, programOutput, setProgramOutput }}>
      {children}
    </SharedStateContext.Provider>
  );
};
