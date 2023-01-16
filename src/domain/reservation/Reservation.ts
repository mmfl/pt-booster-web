export default class Reservation {
  id: number;
  trainer: string;
  member: string;
  date: Date;
  hour: number;
  minute: number;

  constructor(id: number, trainer: string, member: string, date: Date, hour: number, minute: number) {
    this.id = id;
    this.trainer = trainer;
    this.member = member;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
  }
}
