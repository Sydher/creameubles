import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // Gestion de la Navbar
    @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
    @ViewChild('navMenu', {static: true}) navMenu: ElementRef;

    // Gestion du plan d'accès
    @ViewChild('modalPlan', {static: true}) modalPlan: ElementRef;

    /**
     * Active/désactive la barre de navigation en mode mobile.
     */
    toggleNavbar() {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    }

    /**
     * Affiche/Masque le plan d'accès.
     */
    toggleModal() {
        this.modalPlan.nativeElement.classList.toggle('is-active');
    }

}
