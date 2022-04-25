import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('videoElementLocal') videoElementLocal: ElementRef;
  constructor() {}

  async ngOnInit() {

    const localElement = this.videoElementLocal.nativeElement;

    const  localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });


    localElement.srcObject = localStream;
  }

}
