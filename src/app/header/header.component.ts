import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { UserNameService } from "../services/user-name.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {


    constructor(
        private readonly _logInService: LoginService,
        private readonly _router: Router,
        private readonly _userName: UserNameService
        ) {
    }

    get status() {
        return this._logInService.getLoggedInStatus()
    }

    get userName() {
        return this._userName.userName
    }

    goToProfile() {
        this._router.navigate(['/profile'])
    }
    


}