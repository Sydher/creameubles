import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-produits',
    templateUrl: './produits.component.html',
    styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

    @ViewChild('modalImg', {static: true}) modalImg: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    toggleModal() {
        this.modalImg.nativeElement.classList.toggle('is-active');
    }

}
