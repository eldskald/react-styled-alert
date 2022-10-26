import React, { useContext } from 'react';
import { AlertContext } from 'contexts';

export const StyledAlert = () => {

  const { alerts, setAlerts, defaultStyle } = useContext(AlertContext);
  if (alerts.length === 0) return <></>;
  
  const message = alerts[alerts.length - 1].message;
  const onOk = alerts[alerts.length - 1].onOk;
  const onCancel = alerts[alerts.length - 1].onCancel;
  const style = alerts[alerts.length - 1].style;

  const handleOk = () => {
    return () => {
      onOk();
      setAlerts(prev => prev.slice(0, -1));
    };
  };

  const handleCancel = () => {
    if (!onCancel) return null;
    else return () => {
      onCancel();
      setAlerts(prev => prev.slice(0, -1));
    };
  };

  const UsedStyle = style ? style : defaultStyle;

  return (
    <UsedStyle
      message={message}
      onOk={handleOk()}
      onCancel={handleCancel()}
    />
  );
};