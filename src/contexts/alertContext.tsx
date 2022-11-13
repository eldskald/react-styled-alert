import React, { createContext } from 'react';
import { AlertData } from 'types';

export const AlertContext = createContext<{
  alerts: AlertData[],
  setAlerts: React.Dispatch<React.SetStateAction<AlertData[]>>
}>({
  alerts: [],
  setAlerts: () => {return}
});