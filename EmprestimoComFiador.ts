import { Emprestimo } from './Emprestimo';

export class EmprestimoComFiador extends Emprestimo {
  private temFiador: boolean;

  constructor(s: number, n: number, j: number, temFiador: boolean) {
    // com fiador: juros 20% menores / sem fiador: juros 5% maiores
    super(s, n, temFiador ? j * 0.80 : j * 1.05);
    this.temFiador = temFiador;
  }

  public verificarFiador(): boolean {
    return this.temFiador;
  }

  public proximaParcela(): number {
    let pp = super.proximaParcela();
    return pp;
  }
}
