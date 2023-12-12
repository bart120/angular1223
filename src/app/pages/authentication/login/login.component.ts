import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @ViewChild("password")
  passwd?: ElementRef;

  onLogin(login: string): void {

    console.log(login);
    console.log(this.passwd?.nativeElement.value);
  }

}
