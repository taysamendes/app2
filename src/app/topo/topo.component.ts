import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(debounceTime(1000))
      .pipe(switchMap((termo: string) => {
        console.log('----- Requisição ----')
        if(termo.trim()===''){
          return of<Oferta[]>([]) // retornar array vazio caso o campo de pesquisa esteja sem termo
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }))

      this.ofertas.subscribe((ofertas:Oferta[])=>{
        console.log(ofertas)
      })
  }

  public pesquisa(termoDaPesquisa: string): void {
    /*this.ofertas =  this.ofertasService.pesquisaOfertas(termoDaPesquisa)
    this.ofertas.subscribe(
     (data: Oferta[]) => console.log(data),
     (error: any) => console.log('Erro status: ',error.status)
    )*/

    console.log('key up do caracter: ',termoDaPesquisa)

    this.subjectPesquisa.next(termoDaPesquisa)

  }

}
