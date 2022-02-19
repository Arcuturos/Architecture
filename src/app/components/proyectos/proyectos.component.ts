import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any[] = [];

  constructor( private _proyectoService: ProyectosComponent){
    
   }

  ngOnInit(): void {

 //   this.proyectos =  this._proyectoService.getProyectos();
    
    console.log(this.proyectos);
  }

}
