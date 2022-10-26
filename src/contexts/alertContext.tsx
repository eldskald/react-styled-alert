import React, { createContext } from 'react';
import { AlertData, StyledAlertElement } from 'types';

export const AlertContext = createContext<{
  alerts: AlertData[],
  setAlerts: React.Dispatch<React.SetStateAction<AlertData[]>>,
  style: StyledAlertElement,
  setStyle: React.Dispatch<StyledAlertElement>
}>({
  alerts: [],
  setAlerts: () => {return},
  style: () => <></>,
  setStyle: () => {return}
});