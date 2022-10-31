import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @ViewChild('emailUser ')
  emailUser!: ElementRef;

  @ViewChild('passUser ')
  passUser!: ElementRef;

  validateUser() {
    let valUser = this.emailUser.nativeElement.value;
    let valPass = this.passUser.nativeElement.value;

    // Credenciales Administrador
    let nameUserAdm = 'admin@gmail.com';
    let passUserAdm = 'admin';

    // Credenciales Tursita
    let nameUserTuris = 'turista@gmail.com';
    let passUserTuris = 'turista';

    // Credenciales Guía Turístico
    let nameUserGuia = 'guia@gmail.com';
    let passUserGuia = 'guia';

    if (valUser == nameUserAdm && valPass == passUserAdm) {
      this.router.navigate(['administrator-session']);
    } else if (valUser == nameUserTuris && valPass == passUserTuris) {
      this.router.navigate(['']);
    } else if (valUser == nameUserGuia && valPass == passUserGuia) {
      this.router.navigate(['tour-guide-session']);
    }
  }
}
