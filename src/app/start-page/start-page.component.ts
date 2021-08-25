import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html', 
    styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {


    //private userName: string;
    public placeHolder : string = "Enter name";

    constructor(
        private readonly loginService: LoginService,
        private readonly _router: Router
        ) {}

    ngOnInit(): void {
        console.log('Start page')
    }

    public get loggedIn():boolean {
        return this.loginService.getLoggedInStatus();
    }
    
    onSubmit(event: any) {
        let input: string = event.target.userInput.value
        if(input === "") {
            this.placeHolder = "You must enter a name!!"
        } else {
            this.loginService.setLoggedIn(true);
            localStorage.setItem('userName', event.target.userInput.value)
            this._router.navigate(['/pokemons'])
        }
        
    }
}