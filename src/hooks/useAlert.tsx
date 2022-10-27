import { useContext } from 'react';
import { AlertContext } from 'contexts';
import { StyledAlertElement, StyledAlertCaller } from 'types';

export const useAlert = () => {
  const { setAlerts } = useContext(AlertContext);
  return ((
    message: string,
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