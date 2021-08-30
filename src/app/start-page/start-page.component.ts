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

    public placeHolder : string = "Enter name";

    constructor(
        private readonly _loginService: LoginService,
        private readonly _userNameService: UserNameService,
        private readonly _router: Router
    ) {}

    /**
     * Check if user is logged in. Returns true if user is logged in
     */
    get loggedIn():boolean {
        return this._loginService.getLoggedInStatus();
    }
    
    /**
     * If user input is not empty the use- will be redirected to the /pokemon
     * else the user will be asked to enter a name
     * @param event 
     */
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