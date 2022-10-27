import React, { FunctionComponent, ReactNode } from 'react';

export type StyledAlertProps = {
  message: string,
  onOk: (() => void),
  onCancel: (() => void) | null
};

export type StyledAlertElement = FunctionComponent<
  StyledAlertProps
>;

export type AlertProviderProps = {
  defaultStyle: StyledAlertElement
};

export type AlertProviderElement = FunctionComponent<
  AlertProviderProps & {
    children?: ReactNode
  }
>;

export type AlertData = {
  message: string,
  onOk: (() => void),
  onCancel: (() => void) | undefined,
  style: StyledAlertElement | undefined
};

export type StyledAlertCaller = (
  message: string,
  onOk: (() => void) | undefined,
  onCancel: (() => void) | undefined,
  style: StyledAlertElement | undefined
) => void;

export type StyleSetter = React.Dispatch<StyledAlertElement>;