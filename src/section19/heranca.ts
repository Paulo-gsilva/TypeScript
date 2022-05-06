export class Person {
  constructor(
    public readonly name: string,
    public readonly surname: string,
    private readonly age: number, //acesso apenas dentro da classe
    protected readonly cpf: string, //subclasses possuem acesso
  ) { }

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public fullName(): string {
    return this.name + " " + this.surname;
  }
}

export class Student extends Person {
  room: number;
  constructor(name: string, surname: string, age: number, cpf: string, room: number) {
    super(name, surname, age, cpf);
    this.room = room;
  }

  public fullName(): string {
    return `Aluno ${this.name} ${this.surname} da sala ${this.room}`;
  }
}

export class Client extends Person {
  public fullName(): string {
    return `Cliente ${this.name} ${this.surname} possui cpf ${this.cpf}`;
  }
}

const aluno = new Student("Jorge", "Pedro", 21, "324.467.897-87", 1);
const cliente = new Client("Pedro", "Paulo", 22, "657.455.887-87");
console.log(cliente.fullName());
