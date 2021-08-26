import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { UserNameService } from "../services/user-name.service";

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html', 
    styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {


    //private userName: string;
    public placeHolder : string = "Enter name";
    @Output() showProfileEvent = new EventEmitter<string>()

    constructor(
        private readonly _loginService: LoginService,
        private readonly _userNameService: UserNameService,
        private readonly _router: Router
        ) {}

    ngOnInit(): void {
        console.log('Start page')
    }

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
            this.showProfileEvent.emit('working')
            localStorage.setItem('userName', event.target.userInput.value)
            this._router.navigate(['/pokemons'])
        }
        
    }
}