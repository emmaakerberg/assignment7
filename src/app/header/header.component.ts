import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(
        private readonly logInService: LoginService,
        private readonly _router: Router
        ) {
    }



    get status():any|undefined{
        return this.logInService.getLoggedInStatus()
    }

    goToProfile() {
        this._router.navigate(['/profile'])
    }
    


}