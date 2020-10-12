export class Answer{
  constructor(
    public _id: string,
    public problem: string,
    public user: string,
    public message: string,
    public date: string,
    public file: string
  ){}
}
