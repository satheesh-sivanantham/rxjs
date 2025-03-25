import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  imports: [],
  templateUrl: './rxjs-practice.component.html',
  styleUrl: './rxjs-practice.component.scss'
})
export class RxjsPracticeComponent {
  agents!: Observable<string>;
  agentName: string = '';
  private subscription!: Subscription;
  studentnameList = ['Jhon','Doe','Smith', 'Angel'];
  students$:Observable<string[]>= of(this.studentnameList);
  studentName$:Observable<string> = of('Hanna');
  studentObj = {
    id:11,
    Name:'Nirmal'
  }
  studentObservableObj$:Observable<any> = of(this.studentObj)
  constructor() { }

  ngOnInit() {
    //Basic observable creation 
    // this.agents = new Observable(
    //   function (observer) {
    //     try {
    //       observer.next('Ram');
    //       // observer.next('Mark');
    //       //   observer.next('Anto');
    //       setTimeout(()=>{
    //       observer.next('Mark');
    //       },3000);
    //       setTimeout(()=>{
    //         observer.next('Anto');
    //       },6000);
    //     }
    //     catch (e) {
    //       observer.error(e)
    //     }
    //   }
    // );

    // this.agents.subscribe(data => {
    //   console.log(data);
    //   this.agentName = data;
    // })
//<--------------------------------------------------------->    
    //Of operator Subcription
    // Array to Observable 
    this.students$.subscribe(data => {
      console.log('of operator1', data)
    })
    //String to observable 
    this.studentName$.subscribe(data => {
      console.log('of operator2', data)
    })
    //Object to observable 
    this.studentObservableObj$.subscribe(data => {
      console.log('of operator3', data)
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
