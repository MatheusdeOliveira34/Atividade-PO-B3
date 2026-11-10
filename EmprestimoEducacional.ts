import { Emprestimo } from './Emprestimo';

export class EmprestimoEducacional extends Emprestimo {
  private periodoIsencao: number;
  private juros: number;
  private parcela: number;
  private parcelaAtual: number;

  constructor(s: number, n: number, j: number, periodoIsencao: number) {
    super(s, n, j);
    this.periodoIsencao = periodoIsencao;
    this.juros = j;
    this.parcela = s;
    this.parcelaAtual = 0;
  }

  public getPeriodoIsencao(): number {
    return this.periodoIsencao;
  }

  public proximaParcela(): number {
    let pp = 0;
    // a classe pai avisa quando o emprestimo acabou (retorna 0)
    if (super.proximaParcela() > 0) {
      pp = this.parcela;
      this.parcelaAtual++;
      // depois do periodo de isencao, a proxima parcela tem juros
      if (this.parcelaAtual >= this.periodoIsencao) {
        this.parcela = this.parcela + (this.parcela * this.juros / 100);
      }
    }
    return pp;
  }
}
