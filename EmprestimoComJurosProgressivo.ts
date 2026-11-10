import { Emprestimo } from './Emprestimo';

export class EmprestimoComJurosProgressivo extends Emprestimo {
  private acrescimoJuros: number;
  private juros: number;
  private parcela: number;

  constructor(s: number, n: number, jurosInicial: number, acrescimoJuros: number) {
    super(s, n, jurosInicial);
    this.acrescimoJuros = acrescimoJuros;
    this.juros = jurosInicial;
    this.parcela = s;
  }

  public getAcrescimoJuros(): number {
    return this.acrescimoJuros;
  }

  public proximaParcela(): number {
    let pp = 0;
    // a classe pai avisa quando o emprestimo acabou (retorna 0)
    if (super.proximaParcela() > 0) {
      pp = this.parcela;
      this.parcela = this.parcela + (this.parcela * this.juros / 100);
      this.juros = this.juros + this.acrescimoJuros;
    }
    return pp;
  }
}
