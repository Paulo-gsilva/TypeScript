export class Empresa {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly colaboradores: Colaborador[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name; //inicializando
    this.cnpj = cnpj;
  }

  public addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (let colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly surname: string) { }
}

const empresa = new Empresa('FitBank 450', '1234.233.122/24/001');
const colaborador1 = new Colaborador('Fernando', 'Souza');
const colaborador2 = new Colaborador('Patinha', 'Carla');
const colaborador3 = new Colaborador('Cácio', 'Aristoteles');

empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);

empresa.mostrarColaboradores();
