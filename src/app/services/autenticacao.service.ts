import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {

  private logado: boolean = false;

  constructor() {
    this.logado = window.localStorage.getItem('logado') == 'sim';
  }

  validateAllFormFields(username: string, password: string): boolean {
    this.logado = (username == 'admin' && password == 'admin');
    window.localStorage.setItem('logado', this.logado ? 'sim' : 'nao');
    return this.logado;
  }

  logout() {
    window.localStorage.removeItem('logado');
    this.logado = false;
  }

  isLogado() {
    return this.logado;
  }
}
