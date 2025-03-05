import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  userName = 'John Doe';
  name: string = '';
  isDisabled: boolean = true;
  buttonText: string = 'Submit';

  handleClick() {
    alert('Button clicked!');
  }

}
