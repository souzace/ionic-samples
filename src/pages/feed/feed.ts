import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";
import { ENV } from '../../config/environment.dev';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  
  public lista_filmes = new Array<any>();

  public object_feed = {
    titulo: "Marty McFly",
    data: "November 5, 1988",
    descricao: "I need back to the future",
    qtd_likes: 12,
    qtd_comentarios: 4,
    hora_comentario: "11h ago"
  }

  public nome_usuario:string = "Fabio Souza";

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private movieProvider: MovieProvider
    ) {
  }



  ionViewDidLoad() {
    console.log( ENV.API_URL );
    this.movieProvider.getLatest().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
      },
      error => {
        console.log(error);
      }
    )
   // this.somaDoisNumeros(5, 10);
  }

}
