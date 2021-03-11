import { createSelector } from 'reselect';
import { RootState, BrokersState, AlertsState } from 'redux/interfaces';
import { createFetchingSelector } from 'redux/reducers/loader/selectors';

const alertsState = ({ alerts }: RootState): AlertsState => alerts;

export const getAlerts = createSelector(alertsState, (alerts) => alerts);
