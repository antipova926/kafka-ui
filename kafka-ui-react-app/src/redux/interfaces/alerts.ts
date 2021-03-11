import React from 'react';

export interface Alert {
  id: string;
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  message: React.ReactNode;
}

export type AlertsState = Alert[];
