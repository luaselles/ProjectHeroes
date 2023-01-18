import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, createUrlTreeFromSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {

  constructor(private service: AutenticacaoService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.service.isLogado()) {
      return createUrlTreeFromSnapshot(route, ['/login']);
    }
    return true;
  }

}
