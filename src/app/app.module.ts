import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MagasinComponent } from './pages/magasin/magasin.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        AccueilComponent,
        MagasinComponent,
        ProduitsComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
