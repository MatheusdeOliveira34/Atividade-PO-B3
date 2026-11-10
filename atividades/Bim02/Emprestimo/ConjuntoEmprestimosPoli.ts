import { ConjuntoEmprestimos } from './ConjuntoEmprestimos';
import { Emprestimo } from './Emprestimo';
import { EmprestimoTA } from './EmprestimoTA';
import { EmprestimoComDesconto } from './EmprestimoComDesconto';
import { EmprestimoEducacional } from './EmprestimoEducacional';
import { EmprestimoComJurosProgressivo } from './EmprestimoComJurosProgressivo';
import { EmprestimoMoradia } from './EmprestimoMoradia';
import { EmprestimoVeiculo } from './EmprestimoVeiculo';
import { EmprestimoComFiador } from './EmprestimoComFiador';

class ConjuntoEmprestimosPoli {
  public static main(): void {
    const ce = new ConjuntoEmprestimos(9);

    ce.adicionaEmprestimo(new Emprestimo(200, 3, 1));
    ce.adicionaEmprestimo(new EmprestimoTA(500, 4, 2, 15));
    ce.adicionaEmprestimo(new EmprestimoComDesconto(300, 3, 2, 10));
    ce.adicionaEmprestimo(new EmprestimoEducacional(400, 5, 3, 2));
    ce.adicionaEmprestimo(new EmprestimoComJurosProgressivo(250, 4, 1, 0.5));
    ce.adicionaEmprestimo(new EmprestimoMoradia(1000, 3, 2, true));
    ce.adicionaEmprestimo(new EmprestimoVeiculo(800, 3, 2, 'usado'));
    ce.adicionaEmprestimo(new EmprestimoComFiador(600, 2, 5, true));
    ce.adicionaEmprestimo(new EmprestimoComFiador(600, 2, 5, false));

    let status: boolean;
    do {
      status = ce.proximasParcelas();
    } while (status);
  }
}

// Executa o programa
ConjuntoEmprestimosPoli.main();
