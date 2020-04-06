declare var Ext: any;
import {Component} from '@angular/core';
@Component({
  selector: 'audio-component',
  templateUrl: './Audio.html',
  styles: [``]
})
export class AudioComponent {

  playing: boolean;
  audio: any;
  isAndroid = Ext.os.is.Android;

  audioReady = (event) => {
    this.audio = event.cmp;
  }

  toggleAudioAndroid() {
    if (this.playing) {
        this.audio.pause();
    } else {
      this.audio.play();
    }
    this.playing = !this.playing;
  }

}