import { FunctionComponent, ReactNode } from 'react';

export type StyledAlertProvider = FunctionComponent<{
  children: ReactNode
}>;

export type AlertData = {
  content: ReactNode;
  onOk: () => void;
  onCancel?: () => void;
};

export type StyledAlertCaller = (
  content: ReactNode,
  onOk?: () => void,
  onCancel?: () => void
) => void;
