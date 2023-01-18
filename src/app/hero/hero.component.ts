import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private autenticacao: AutenticacaoService, private router: Router) {
    this.autenticacao = autenticacao;
  }

  logout() {
    this.autenticacao.logout();
    this.router.navigateByUrl('/login');
  }
}
