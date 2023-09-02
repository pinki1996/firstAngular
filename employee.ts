export class Employee {

    id:number;
    name:string;
    salary:number;
    bonus:number;

    constructor(id:number=0, name:string="", salary:number=0, bonus:number=0){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
    }


}
