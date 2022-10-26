import React, { createContext } from 'react';
import { AlertData, StyledAlertElement } from 'types';

export const AlertContext = createContext<{
  alerts: AlertData[],
  setAlerts: React.Dispatch<React.SetStateAction<AlertData[]>>,
  defaultStyle: StyledAlertElement,
  setDefaultStyle: React.Dispatch<StyledAlertElement>
}>({
  alerts: [],
  setAlerts: () => {return},
  defaultStyle: () => <></>,
  setDefaultStyle: () => {return}
});