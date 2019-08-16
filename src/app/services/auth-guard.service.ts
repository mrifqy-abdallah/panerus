import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  constructor(
    public authenticationService: AuthenticationService
  ) { }
}
