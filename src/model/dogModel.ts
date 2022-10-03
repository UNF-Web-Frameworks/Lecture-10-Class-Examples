export class Dog
{
    id:number=0;
    name:string='';
    breed:string='';
    secretcmd:string='';
    constructor(id:number,name:string,breed:string, secretcmd:string)
    {
        this.breed=breed;
        this.id = id;
        this.name = name;
        this.secretcmd = secretcmd;
    }
}