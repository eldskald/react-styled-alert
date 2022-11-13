import { useContext, ReactNode } from 'react';
import { AlertContext } from 'contexts';
import { StyledAlertCaller, AlertData } from 'types';

export const useAlert = () => {
  const { setAlerts } = useContext(AlertContext);
  return ((
    content: ReactNode,
    onOk: () => void = () => {return},
    onCancel?: () => void
  ) => {
    setAlerts(prev => [
      ...prev,
      { content, onOk, onCancel } as AlertData
    ]);
  }) as StyledAlertCaller;
};