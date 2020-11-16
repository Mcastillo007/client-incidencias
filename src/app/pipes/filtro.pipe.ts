import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from '../models/problem';
import { User } from '../models/user';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(problems: Problem[], texto: string): Problem[] {
    
    if ( texto.length == 0 ) { return problems; }

    texto = texto.toLocaleLowerCase();

    return problems.filter( problem => {
    return problem.user_create.name.toLocaleLowerCase().includes(texto)
            || problem.user_create.surname.toLocaleLowerCase().includes(texto)
            || problem.user_create.rut.includes(texto)
            || problem.subject?.name.toLocaleLowerCase().includes(texto)
            || problem.category.name.toLocaleLowerCase().includes(texto)
            || problem.subcategory.name.toLocaleLowerCase().includes(texto)
            || problem.state.toLocaleLowerCase().includes(texto);
    });
  }

}
