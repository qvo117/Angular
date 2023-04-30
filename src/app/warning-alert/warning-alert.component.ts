import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>WARNING ALERT</p>`,
  styles: [
    `
      p {
        padding: 20px;
        text-align: center;
        color: red;
        background-color: yellow;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
