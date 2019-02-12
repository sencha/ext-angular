declare var Ext: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'porgressbar-component',
  templateUrl: './ProgressBar.html',
  styles: [``]
})
export class ProgressBarComponent implements OnInit {


  progress = 1;
  progressText:string;
  updateLoop;

  ngOnInit() {
    this.progressText = "1%";
    this.updateLoop = setInterval(() => { 
        this.progress += 1;
        this.progressText = this.progress + "%";
        if (this.progress > 100) this.progress = 0;
    }, 100)
  }

}