import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MagasinComponent } from './pages/magasin/magasin.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ContactComponent } from './pages/contact/contact.component';

// Liste des routes de l'application
const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'notre-magasin', component: MagasinComponent },
    { path: 'nos-produits', component: ProduitsComponent },
    { path: 'nous-contacter', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
