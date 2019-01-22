declare var Ext: any;
import {Component} from '@angular/core';
@Component({
  selector: 'audio-component',
  templateUrl: './Audio.html',
  styles: [``]
})
export class AudioComponent {

  constructor() { }

  playing: boolean;
  audio: any;
  isAndroid = Ext.os.is.Android;

  // ngOnInit() {
  //   console.log("isAndroid : " + this.isAndroid);
  // }


  audioReady = (event) => {
    console.log("audioReady");
    this.audio = event.ext;
  }


  toggleAudioAndroid() {

    if (this.playing) {
        console.log("Playing");
        this.audio.pause();
    } else {
      console.log(" Not Playing");
      this.audio.play();
    }        
    
    this.playing = !this.playing;
    console.log("this.playing : " + this.playing);
  }

}