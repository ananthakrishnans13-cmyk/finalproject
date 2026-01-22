import { Routes } from '@angular/router';
import { Books } from './books/books';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'books',component:Books},
    {path:'home',component:Home},
    {path:'contact',component:Contact}
];
