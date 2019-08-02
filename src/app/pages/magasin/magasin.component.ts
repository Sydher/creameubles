import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-magasin',
    templateUrl: './magasin.component.html',
    styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {

    @ViewChild('modalImg', {static: true}) modalImg: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    toggleModal() {
        this.modalImg.nativeElement.classList.toggle('is-active');
    }

}
