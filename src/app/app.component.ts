import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {SwapiService} from "./core/swapi.service";
import {Observable} from "rxjs";
import "rxjs";

const PEOPLE_API_URL = "https://swapi.co/api/people";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app works!';
  people = [];

  //El constructor es para inyeccion de dependencias
  constructor(private swapiService: SwapiService){

  }

  /*  Cojo un array de respuestas
  *   map: transforma lo que me llega
  *   subscribe: los resultados se los asigno a this.people  (suscribe es propio de los observables - es para recibir objetos de la fuente)
  * */
  ngOnInit() {
    this.swapiService
      .getPeopleList()
      .subscribe((people) => this.people = people);
  }

}

