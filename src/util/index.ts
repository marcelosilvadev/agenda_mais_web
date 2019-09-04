import moment from 'moment';

export const getDate = (dateParam) => {
  if (!dateParam) {
    return null;
  }
  return moment(dateParam.toString()).toDate();
};