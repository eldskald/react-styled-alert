import React, { useState } from 'react';
import { AlertContext } from 'contexts';
import {
  AlertProviderElement,
  AlertData,
  StyledAlertElement
} from 'types';

export const AlertProvider: AlertProviderElement = ({ defaultStyle, children }) => {
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [currentStyle, setCurrentStyle] = useState<StyledAlertElement>(defaultStyle);

  return (
    <AlertContext.Provider value={{
      alerts,
      setAlerts,
      defaultStyle: currentStyle,
      setDefaultStyle: setCurrentStyle
    }}>
      {children}
    </AlertContext.Provider>
  );
};