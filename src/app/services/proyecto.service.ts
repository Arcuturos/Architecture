import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {


//Arreglo de proyectos 
 //{ nombreProyecto: "", descripcion: "", img1: "url", img2: "url", img3: "url", img4: "url", fecha: ""}


private proyectos:any[] = [

  { id: 0 , nombreProyecto: "pep", descripcion: "aaf", img1: "url", img2: "url", img3: "url", img4: "url", fecha: "adada"}
];


  constructor() {
     console.log("Servicio disponible");
   }

   getProyectos(){
     return this.proyectos;
   }
  }
  