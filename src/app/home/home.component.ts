import { DatePipe, DecimalPipe, NgIf } from '@angular/common';
import { Component, computed, effect, Input, signal } from '@angular/core';
import {users} from '../DB/data'


@Component({
  selector: 'app-home',
  imports: [DatePipe, DecimalPipe,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() sample!:string;
  result!:string;
  templateCheck:boolean= false;
  heading:string='Change Detection Course'

  userData:any = users;

   data = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 28, city: "Chicago" },
    { id: 4, name: "David", age: 35, city: "Houston" },
    { id: 5, name: "Eve", age: 22, city: "Miami" }
  ];

  StartDate  = new Date()
  LoanAmount = 7.58;
  count = signal(0);
  derivedCounter = computed(() => {
    const count = this.count();
    
    return count * 10;
  })

  // data:any[] = [];
  constructor(){

    effect(() => {
      const countValue = this.count();
      const derivedValue = this.derivedCounter();
      console.log(`count value: ${countValue} Derived value: ${derivedValue}`) 
    })
  }

  ngOnInit(){
    this.result = this.sample
    console.log(this.userData)

  }
  increment(){
    // this.count.set(this.count() + 1)
    this.count.update(val => val + 1)
  }
  changeDetectValue(newValue:string){
    this.heading = newValue;
  }
  
  getHeaders(): string[] {
    return this.userData.length > 0 ? Object.keys(this.userData[0]) : [];
  }


}
