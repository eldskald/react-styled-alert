import React, { useState } from 'react';
import { AlertContext } from 'contexts';
import { StyledAlertProvider, AlertData } from 'types';

export const AlertProvider: StyledAlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  return (
    <AlertContext.Provider value={{
      alerts,
      setAlerts
    }}>
      {children}
    </AlertContext.Provider>
  );
};