import { Routes } from '@angular/router';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},

    { path: 'rxjs', component: RxjsPracticeComponent }

];
