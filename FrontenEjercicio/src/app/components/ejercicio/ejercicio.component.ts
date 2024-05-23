
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'Nombre', 'Minutos', 'Caloriasw'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  totalMinutos: number = 0;
  totalCaloriasw: number = 0;
  constructor(private router: Router) { }

  Ingresar(){

    this.router.navigate(['/opcion2']);
  }


  @ViewChild (MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator;
  }


  getTotalMinutes(): number {
    // Suma de minutos
    return this.dataSource.data.map(element => element.Minutos).reduce((acc, value) => acc + value, 0);
  }
  
  getTotalCalories(): number {
    // Suma de calorías
    return this.dataSource.data.map(element => element.Caloriasw).reduce((acc, value) => acc + value, 0);
  }


}
export interface PeriodicElement {
  Nombre: string;
  Caloriasw: number;
  Minutos: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { Nombre: 'Hydrogen', Minutos: 1, Caloriasw:1},
  { Nombre: 'Helium', Minutos: 4, Caloriasw:1},
  { Nombre: 'Lithium', Minutos: 6, Caloriasw:1},
  { Nombre: 'Beryllium', Minutos: 9, Caloriasw:1}, 
];
const ELEMENT_DATA2: PeriodicElement[] = [
  { Nombre: 'Hydrogen', Minutos: 1, Caloriasw:1},
  { Nombre: 'Helium', Minutos: 4, Caloriasw:1},
  { Nombre: 'Lithium', Minutos: 6, Caloriasw:1},
  { Nombre: 'Beryllium', Minutos: 9, Caloriasw:1}, 
];