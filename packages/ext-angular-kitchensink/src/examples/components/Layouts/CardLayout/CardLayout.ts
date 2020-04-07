declare var Ext: any;
import {Component, ChangeDetectorRef} from '@angular/core'
import colors from '../colors';

@Component({
  selector: 'cardlayout-component',
  templateUrl: "./CardLayout.html",
  styles: [``]
})
export class CardLayoutComponent {

  activeCard:number = 0;
  animation:any = null;
  colors:any = colors;

  constructor(private cd: ChangeDetectorRef) {}

  switchCards = (animation) => {
    this.animation = animation;
    this.activeCard = this.activeCard === 0 ? 1 : 0;
    this.cd.detectChanges();
  }

  animationDefaults:object = {
      duration: 500,
      easing: 'ease-in-out'
  };

  contents:object[] = [
    { text: 'Slide Left', animation: { type: 'slide', direction: 'left', ...this.animationDefaults } },
    { text: 'Slide Right', animation: { type: 'slide', direction: 'right', ...this.animationDefaults } },
    { text: 'Slide Up', animation: { type: 'slide', direction: 'up', ...this.animationDefaults } },
    { text: 'Slide Down', margin: '0 0 20 0', animation: { type: 'slide', direction: 'down', ...this.animationDefaults } },
    { text: 'Cover Left', animation: { type: 'cover', direction: 'left', ...this.animationDefaults } },
    { text: 'Cover Right', animation: { type: 'cover', direction: 'right', ...this.animationDefaults } },
    { text: 'Cover Up', animation: { type: 'cover', direction: 'up', ...this.animationDefaults } },
    { text: 'Cover Down', margin: '0 0 20 0', animation: { type: 'cover', direction: 'down', ...this.animationDefaults } },
    { text: 'Reveal Left', animation: { type: 'reveal', direction: 'left', ...this.animationDefaults } },
    { text: 'Reveal Right', animation: { type: 'reveal', direction: 'right', ...this.animationDefaults } },
    { text: 'Reveal Up', animation: { type: 'reveal', direction: 'up', ...this.animationDefaults } },
    { text: 'Reveal Down', margin: '0 0 20 0', animation: { type: 'reveal', direction: 'down', ...this.animationDefaults } },
    { text: 'Fade', animation: { type: 'fade', ...this.animationDefaults } },
    { text: 'Pop', animation: { type: 'pop', ...this.animationDefaults } },
    { text: 'Flip', animation: { type: 'flip', ...this.animationDefaults } }
  ];

}
