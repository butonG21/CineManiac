/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment';

export const getYear = (date) => (date === '' || date === null ? null : moment(date).year());

export const getCurrentDate = () => moment().toDate();

export const getOneMonthBefore = () => moment().subtract(1, 'months');

export const formatDate = (date) => (date !== null ? moment(date).format('YYYY-MM-DD') : '');

export function formatFullDate(date) {
  return date !== null ? moment(date).format('D MMMM YYYY') : '';
}

export function formatDuration(minutes) {
  if (minutes === null) {
    return '?';
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes === 0 ? `${hours}h` : `${hours}h ${remainingMinutes}m`;
}
