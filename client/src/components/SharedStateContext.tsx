import React, { createContext, useContext } from 'react';

type SharedStateContextType = {
  programInput: string;
  programOutput: string;
  setProgramInput: React.Dispatch<React.SetStateAction<string>>;
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
  const [programInput, setProgramInput] = React.useState<string>('');
  const [programOutput, setProgramOutput] = React.useState<string>('');

  return (
    <SharedStateContext.Provider value={{ programInput, programOutput, setProgramInput, setProgramOutput }}>
      {children}
    </SharedStateContext.Provider>
  );
};
