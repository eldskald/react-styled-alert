import { useContext } from 'react';
import { AlertContext } from 'contexts';
import { StyleSetter } from 'types';

export const useStyleSetter = () => {
  const { setDefaultStyle } = useContext(AlertContext);
  return setDefaultStyle as StyleSetter;
};