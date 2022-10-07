import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public nomeProduto: string = "Curso do Angular";
  anuncio: string = `O ${this.nomeProduto} esta em promocao`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor() {
    //this.anuncio = 'O' + this.nomeProduto + ' está em promocao';
   /* console.log(`Nome do Produto: `, this.nomeProduto);
    console.log(`Anúncio: `, this.anuncio);
    console.log(`IdProduto: `, this.idProduto);
    console.log(`Preço: `, this.precoProduto);
    console.log(`Promocao: `, this.promocao);
    var variavel1;
    let variavel2;
    const variavel3: number = 10;

    var idade = 18;
    console.log('Minha idade é: ', idade);

         function imprimeIdade(){
          var idade = 20;
          console.log ('Minha idade é: ', idade);
         }


    function imprimeIdade() {
      let idade = 20;
      console.log('Minha idade é: ', idade);
    }
    function imprimeIdadeFor() {
      for (var idade = 30; idade <= 40; idade++) {
        console.log('Idade dentro do for: ', idade);
      }
      console.log('Idade fora  do for: ', idade);
    }

    imprimeIdade();
    imprimeIdadeFor();
  }*/

  var variavel = 0;
  var variavel = 10;
  console.log('variavel', variavel);
  function funcao () {
    var outra_variavel = 20;
    var outra_variavel = 30;
    console.log('Outra variável:', outra_variavel);
  }
funcao()
  }

  ngOnInit(): void { }

}
