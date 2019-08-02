import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';

// Liste des routes de l'application
const routes: Routes = [
    { path: '', component: AccueilComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
