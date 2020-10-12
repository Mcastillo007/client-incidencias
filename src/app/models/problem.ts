export class Problem{
  constructor(
    public _id: string,
    public code: string,
    public user_create: string,
    public description: string,
    public user_secretary: string,
    public user_director: string,
    public file: string,
    public subject: string,
    public category: string,
    public state: string,
    public date_create: string,
    public date_fin: string
  ){}
}
