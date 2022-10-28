import { useContext, ReactNode } from 'react';
import { AlertContext } from 'contexts';
import { StyledAlertElement, StyledAlertCaller } from 'types';

export const useAlert = () => {
  const { setAlerts } = useContext(AlertContext);
  return ((
    message: ReactNode,
    onOk: () => void = () => {return},
    onCancel?: () => void,
    style?: StyledAlertElement
  ) => {
    setAlerts(prev => [
      ...prev,
      { message, onOk, onCancel, style }
    ]);
  }) as StyledAlertCaller;
};