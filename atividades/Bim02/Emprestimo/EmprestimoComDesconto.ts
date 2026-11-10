import { Emprestimo } from './Emprestimo';

export class EmprestimoComDesconto extends Emprestimo {
  private percentualDesconto: number;
  private totalParcelas: number;
  private parcelaAtual: number;

  constructor(s: number, n: number, j: number, percentualDesconto: number) {
    super(s, n, j);
    this.percentualDesconto = percentualDesconto;
    this.totalParcelas = n;
    this.parcelaAtual = 0;
  }

  public getPercentualDesconto(): number {
    return this.percentualDesconto;
  }

  public proximaParcela(): number {
    let pp = super.proximaParcela();
    if (pp > 0) {
      this.parcelaAtual++;
      // desconto so na ultima parcela
      if (this.parcelaAtual == this.totalParcelas) {
        pp = pp - (pp * this.percentualDesconto / 100);
      }
    }
    return pp;
  }
}
