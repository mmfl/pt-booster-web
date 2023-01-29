export default class User {
  id: number
  uid: string
  role: string
  profile: {
    name: string
    nickname: string | null
    phone: string | null
    image: string | null
  }

  constructor(
    id: number,
    uid: string,
    role: string,
    profile: {
      name: string,
      nickname: string | null,
      phone: string | null,
      image: string | null
    }) {
    this.id = id;
    this.uid = uid;
    this.role = role;
    this.profile = profile;
  }
}
