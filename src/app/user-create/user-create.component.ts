import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { PlayerService } from '../player.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [AuthService, PlayerService ]
})
export class UserCreateComponent implements OnInit {
  //authService.user.uid
  userName: string;
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router, private playerService: PlayerService){

  }
  signup(username) {
    this.authService.signup(this.email, this.password);
    this.authService.user.subscribe(snap=>{
      if (snap !== null) {
        this.playerService.loginPlayer(snap.uid, username);
      }
    })
    this.email = this.password = ''

  }

  toLogin(){
    this.router.navigate(['']);
  }
  ngOnInit(){}

}
