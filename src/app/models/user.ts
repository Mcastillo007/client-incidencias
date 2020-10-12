export class User{
  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public password: string,
    public rut: string,
    public image: string,
    public year: string,
    public role: string,
    public date: string,
    public state: string,
    public email: string
  ){}
}
