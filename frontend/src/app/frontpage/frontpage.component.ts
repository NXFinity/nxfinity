import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from "../../settings/core/user/interface/user.interface";
import {AuthService} from "../../settings/core/auth";
import {UserService} from "../../settings/core/user/user.service";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  todayNumber: number = Date.now()
  todayDate: Date = new Date()
  todayString: string = this.todayDate.toDateString()
  todayISOString: string = this.todayDate.toISOString()
  todayLocaleString: string = this.todayDate.toLocaleString()
  todayLocaleDateString: string = this.todayDate.toLocaleDateString()
  private dataSource: any;
  user!: User;

  buildVersion: string = '0.0.1';

  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  loggedIn() {
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
