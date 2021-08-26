import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { UserNameService } from "../services/user-name.service";

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html', 
    styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {


    //private userName: string;
    public placeHolder : string = "Enter name";

    constructor(
        private readonly _loginService: LoginService,
        private readonly _userNameService: UserNameService,
        private readonly _router: Router
        ) {}


    public get loggedIn():boolean {
        return this._loginService.getLoggedInStatus();
    }
    
    onSubmit(event: any) {
        let input: string = event.target.userInput.value
        if(input === "") {
            this.placeHolder = "You must enter a name!!"
        } else {
            this._loginService.setLoggedIn(true);
            this._userNameService.setUserName(event.target.userInput.value);
            localStorage.setItem('userName', event.target.userInput.value)
            this._router.navigate(['/pokemons'])
        }
        
    }
}