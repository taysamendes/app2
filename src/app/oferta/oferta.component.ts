import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, interval, Observer, Subscription } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription!: Subscription
  // private meuObservableTesteSubscription!: Subscription

  public oferta!: Oferta

   constructor(
      private route: ActivatedRoute, 
      private ofertasService: OfertasService
      ) { }

  ngOnInit(): void {
      this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })

      //   this.route.params.subscribe((params: any)=>{
      //     console.log(params),
      //     (erro:any)=> console.log(erro),
      //     () => console.log('processamento foi classificado como concluido')
      //   })

      // let tempo = interval(2000)
      //   this.tempoObservableSubscription = tempo.subscribe((intervalo:number)=>{
      //     console.log(intervalo)
      //   })

      //OBESERVAVEL
      let meuObservableTeste = new Observable((observer: Observer<string>)=> {
        // observer.next('Primeiro evento da stream')
        // observer.next('Primeiro evento da stream')
        // observer.complete()
        // observer.next('Primeiro evento da stream')
        // observer.next('Primeiro evento da stream')
        // observer.next('Primeiro evento da stream')

        // observer.next(3)
        // observer.complete()
      })

      //OBESERVADOR
      // this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      //   (resultado: any) => console.log(resultado),  //next
      //   (erro:string) => console.log(erro),         //erro
      //   () => console.log('Stream foi finalizada') //finalização
      // )
  }

  ngOnDestroy() {
    // this.meuObservableTesteSubscription.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}