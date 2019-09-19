import { padStart } from 'lodash';
import moment from 'moment-timezone';

const tz = 'America/Sao_Paulo';

export enum DateFormat {
  dateTimeBr = 'DD/MM/YYYY HH:mm:ss',
  dateTime = 'YYYY-MM-DDThh:mm:ss',
  hourTime = 'HH:mm:ss',
  onlyYear = 'YYYY',
}

export const dateString = (date?: Date | string, format = DateFormat.dateTime) => {
  if (!date) {
    return '';
  }

  return moment.tz(date.toString(), tz).format(format);
};

export const dateNow = (format = DateFormat.dateTime) => {
  return moment().format(format);
};

export const date = (date?: Date | string) => {
  if (!date) {
    return null;
  }

  return moment.tz(date.toString(), tz).toDate();
};

export const dateMoment = (date?: Date | string) => {
  if (!date) {
    return null;
  }

  return moment.tz(date.toString(), tz);
};

export const zipCode = (param: any) => {
  const pad = padStart((param || '').toString(), 8, '0');
  return [pad.slice(0, 5), '-', pad.slice(5)].join('');
};

export const cpf = (param?: any) => {
  const pad = padStart((param || '').toString(), 11, '0');
  return [pad.slice(0, 3), '.', pad.slice(3, 6), '.', pad.slice(6, 9), '-', pad.slice(9, 11)].join('');
};

export const cnpj = (param?: any) => {
  const pad = padStart((param || '').toString(), 14, '0');
  return [pad.slice(0, 2), '.', pad.slice(2, 5), '.', pad.slice(5, 8), '/', pad.slice(8, 12), '-', pad.slice(12, 14)].join('');
};

export const toDecimal = (value: any, qtd = 2) => {
  return Number(value).toFixed(qtd);
};

export const getDateFromTimeString = (timeString: string) => {
  return new Date(`1970-01-01T${timeString}`);
};

export const maskDate = (date: string) => {
  let aux = date.split("T");
  let aux2 = aux[0].split("-");
  let newDate = aux2[2] + "/" + aux2[1] + "/" + aux2[0];
  return newDate;
}

export const formatPhone = (phone: string) => {
  var phones = phone.split("");
  return ('(' + phones[0] + phones[1] + ')' + phones[2] + ' ' + phones[3] + phones[4] + phones[5] + phones[6] + '-' + phones[7] + phones[8] + phones[9] + phones[10])
}