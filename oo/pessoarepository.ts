import { IRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";

export class PessoaRepository implements IRepositoryBase{
    
    insert(pessoa: Pessoa): boolean {
        console.log('Inserindo pessoa........', pessoa.toString());
        return true;
    }
    update(object: any): boolean {
        console.log('Atualizando pessoa........', Pessoa.toString());
        return true;
    }
    delete(id: number): boolean {
        console.log('Deletando pessoa........');
        return true;
    }
    findById(id: number) {
        return null;
    }
    findAll(): [any] {
        return [new Pessoa('Jose')];
    }
    
}