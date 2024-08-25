import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', {static : true}) name! : ElementRef;

  constructor( @Inject(localStorageToken) private localStorage : Storage ) {}

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 15;
  // }
}
