import { useContext } from 'react';
import { AlertContext } from '../contexts';
import { AlertData } from '../types';

export const useAlertData = () => {
  const { alerts, setAlerts } = useContext(AlertContext);
  if (alerts.length === 0) return null;

  const content = alerts[alerts.length - 1].content;
  const onOk = alerts[alerts.length - 1].onOk;
  const onCancel = alerts[alerts.length - 1].onCancel;

  const handleOk = () => {
    onOk();
    setAlerts(prev => prev.slice(0, -1));
  };

  const handleCancel = onCancel ? (
    () => {
      onCancel();
      setAlerts(prev => prev.slice(0, -1));
    }
  ) : undefined;

  return {
    content,
    onOk: handleOk,
    onCancel: handleCancel
  } as AlertData;
};