import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { from, fromEvent, Observable, of, Subscription, interval, debounceTime, Subject, take } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-rxjs-practice',
  imports: [FormsModule],
  templateUrl: './rxjs-practice.component.html',
  styleUrl: './rxjs-practice.component.scss'
})
export class RxjsPracticeComponent {
  agents!: Observable<string>;
  agentName: string = '';
  private subscription!: Subscription;
  //of operator
  studentnameList = ['Jhon', 'Doe', 'Smith', 'Angel'];
  students$: Observable<string[]> = of(this.studentnameList);
  studentName$: Observable<string> = of('Hanna');
  studentObj = {
    id: 11,
    Name: 'Nirmal'
  }
  studentObservableObj$: Observable<any> = of(this.studentObj)
  //From Operator
  electronicsArr = ['Phone', 'Radio', 'Tv', 'Earbud'];
  electronics$ = from(this.electronicsArr);

  //debounceTime
  searchItem:string = '';
  searchData$ = of(this.searchItem)
  private searchSubject = new Subject<string>()
  
  @ViewChild('validate')
  validateData!:ElementRef;

  constructor() {

   }

  ngOnInit() {
    this.subscribeSearchData();

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
    //<----------------------Of operator Subcription----------------------------------->    
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
    //<-------------------------From operator subcription--------------------------------------->
    this.electronics$.subscribe(data => {
      console.log('From Operator', data)
    })
    
    //<----------------------------Interval Operator------------------------------>
    // this.electronics$.subscribe(data => {
    //   const seqNumb$ = interval(1000);
    //   seqNumb$.subscribe(num => {
    //     if(num < 5 ){
    //     console.log('Interval', data + num);
    //     }
    //   })
    // })
  }

  // From event handler
  fromEventHandler(){
    const btnObservable$ = fromEvent(this.validateData?.nativeElement,'click');

    btnObservable$.subscribe(data => {
      console.log('fromEvent', data)
    })
  }
  
//<--------------debounceTime and take  Operator --------------> 
  searchData(){
    this.searchSubject.next(this.searchItem);
  }

  subscribeSearchData(){
    this.searchSubject.pipe(
      take(3),
      debounceTime(3000)
    )
    .subscribe(data => {
      console.log('debounce', data)
    })
  }
//<--------------debounceTime and take  Operator--------------> 


  //Avoid memory leak
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
