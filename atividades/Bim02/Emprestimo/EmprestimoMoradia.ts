import { Emprestimo } from './Emprestimo';

export class EmprestimoMoradia extends Emprestimo {
  private temSeguroMoradia: boolean;

  constructor(s: number, n: number, j: number, temSeguroMoradia: boolean) {
    // mais de 120 parcelas: juros 15% menores
    super(s, n, n > 120 ? j * 0.85 : j);
    this.temSeguroMoradia = temSeguroMoradia;
  }

  public temSeguro(): boolean {
    return this.temSeguroMoradia;
  }

  public proximaParcela(): number {
    let pp = super.proximaParcela();
    if (pp > 0 && this.temSeguroMoradia) {
      pp += 10; // seguro
    }
    return pp;
  }
}
