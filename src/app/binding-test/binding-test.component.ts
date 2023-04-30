import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css'],
})
export class BindingTestComponent {
  username = '';

  onIsEmptyString() {
    return this.username === '';
  }

  onResetString() {
    this.username = '';
  }
}
