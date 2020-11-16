export class Problem{
  constructor(
    public _id: string,
    public code: string,
    public user_create: any,
    public description: string,
    public users: string,
    public file: string,
    public subject: any,
    public category: any,
    public subcategory: any,
    public state: string,
    public date_create: string,
    public date_fin: string
  ){}
}
