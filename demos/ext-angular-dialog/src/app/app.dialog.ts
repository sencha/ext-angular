import { Component, ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-dialog',
    inputs: ['show', 'name', 'email'],
    template: `
<ext-dialog
        [displayed]="isDisplayed"
        [title]="'Dialog in separate source file'"
        [width]="dialogWidth"
        [height]="dialogHeight"
        [constrainDrag]="false"
        [closable]="false"
        [maximizable]="true"
        [closeAction]="'hide'"
        [bodyPadding]="10"
        [defaultFocus]="'#ok'"
    >

    <ext-formpanel>
        <ext-fieldset
            [title]="'Personal Info'"
            [defaults]="{ labelAlign: 'placeholder' }"
        >
            <ext-textfield
                (ready)="readyName($event)"
                [label]="'Name'"
                [required]="true"
                [placeholder]="'This field is required'"
                [disabled]="disabled"
            >
            </ext-textfield>
            <ext-emailfield
                (ready)="readyEmail($event)"
                [label]="'Email'"
                [placeholder]="'me@sencha.com'"
                [disabled]="disabled"
            >
            </ext-emailfield>
            <ext-passwordfield
                [label]="'Password'"
                [required]="true"
                [revealable]="true"
                [disabled]="disabled"
            >
            </ext-passwordfield>
            <ext-textfield
                [label]="'Phone Number'"
                [inputMask]="'(999) 999-9999'"
                [inputType]="'tel'"
                [disabled]="disabled"
            >
            </ext-textfield>
            <ext-urlfield
                [label]="'URL'"
                [placeholder]="'http://sencha.com'"
                [disabled]="disabled"
            >
            </ext-urlfield>
            <ext-spinnerfield
                [label]="'Spinner'"
                [minValue]="0"
                [maxValue]="1000"
                [stepValue]="1"
                [cycle]="true"
                [margin]="'15 0 0 0'"
                [labelAlign]="'top'"
                [disabled]="disabled"
            ></ext-spinnerfield>
        </ext-fieldset>
    </ext-formpanel>

    <ext-toolbar docked="bottom">
        <ext-spacer></ext-spacer>
        <ext-button align="right" text="Cancel" (tap)="onCancel()"></ext-button>
        <ext-button text="OK" (tap)="onOk()"></ext-button>
    </ext-toolbar>

</ext-dialog>

    `,
    styles: []
})
export class DialogComponent {

    dialogWidth:number = document.body.clientWidth - 100;
    dialogHeight:number = document.body.clientHeight - 100;
    isDisplayed:boolean = false;

    constructor(private cd: ChangeDetectorRef) {};

    cmpName: any;readyName(event) {this.cmpName = event.detail.cmp;}
    cmpEmail: any;readyEmail(event) {this.cmpEmail = event.detail.cmp;}

    public ngOnChanges(changes: SimpleChanges) {
         for (let propName in changes) {
            if (propName == 'show') {
                if(changes[propName].currentValue != undefined) {
                    this.isDisplayed = true;this.cd.detectChanges();
                }
            }
            if (propName == 'name') {
                if(changes[propName].currentValue != undefined) {
                    this.cmpName.setValue(changes[propName].currentValue);this.cd.detectChanges();
                }
            }
            if (propName == 'email') {
                if(changes[propName].currentValue != undefined) {
                    this.cmpEmail.setValue(changes[propName].currentValue);this.cd.detectChanges();
                }
            }
        }
    }
    onOk = () => {this.isDisplayed = false;this.cd.detectChanges();}
    onCancel = () => {this.isDisplayed = false;this.cd.detectChanges();}
}