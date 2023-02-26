import User from '../user/User';


export default class Reservation {
  id: number;
  trainer: string;
  member: User;
  date: string;
  hour: number;
  minute: number;
  duration: number;

  constructor(id: number, trainer: string, member: User, date: string, hour: number, minute: number, duration: number) {
    this.id = id;
    this.trainer = trainer;
    this.member = member;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
    this.duration = duration;
  }
}


export interface ReservationListWithDate {
  startDate: Date;
  endDate: Date;
  dates: {
    [key: string]: Reservation[]; // "YYYY-MM-DD": [Reservation, Reservation, ...]
  };
}
