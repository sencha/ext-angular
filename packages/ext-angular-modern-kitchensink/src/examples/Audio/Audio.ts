import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'audio-component',
  templateUrl: './Audio.html',
  styles: [``]
})
export class AudioComponent implements OnInit {

  constructor() { }

  playing: boolean;
  audio: AudioComponent;
  isAndroid = Ext.os.is.Android;

  //@ViewChild('audioRef') audioRef: ElementRef<AudioComponent>;

  ngOnInit() {
    //this is not correct. Need a proper way to reference audio.
    //this.audio = this.audioRef.nativeElement;
  }

  toggleAudioAndroid() {

    if (this.playing) {
        console.log("Playing");
        //this.audio.pause();
        // audio.pause();
    } else {
      console.log(" Not Playing");
      //this.audio.play();
      //audio.play();
    }        

    this.playing = !this.playing;
    console.log("this.playing : " + this.playing);
  }

}