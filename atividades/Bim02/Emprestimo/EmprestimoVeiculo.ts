import { Emprestimo } from './Emprestimo';

export class EmprestimoVeiculo extends Emprestimo {
  private tipo: string;
  private totalParcelas: number;

  constructor(s: number, n: number, j: number, tipo: string) {
    // veiculo usado: juros + 1
    super(s, n, tipo == 'usado' ? j + 1 : j);
    this.tipo = tipo;
    this.totalParcelas = n;
  }

  public getTipo(): string {
    return this.tipo;
  }

  public proximaParcela(): number {
    let pp = super.proximaParcela();
    if (pp > 0 && this.totalParcelas > 60) {
      pp = pp + (pp * 0.02); // taxa administrativa
    }
    return pp;
  }
}
