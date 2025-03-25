import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  imports: [],
  templateUrl: './rxjs-practice.component.html',
  styleUrl: './rxjs-practice.component.scss'
})
export class RxjsPracticeComponent {
  agents!: Observable<string>;
  agentName: string = '';
  constructor() { }

  ngOnInit() {
    this.agents = new Observable(
      function (observer) {
        try {
          observer.next('Ram');
          // observer.next('Mark');
          //   observer.next('Anto');
          setTimeout(()=>{
          observer.next('Mark');
          },3000);
          setTimeout(()=>{
            observer.next('Anto');
          },6000);
        }
        catch (e) {
          observer.error(e)
        }
      }
    );

    this.agents.subscribe(data => {
      console.log(data);
      this.agentName = data;
    })
    
  }
  
}
