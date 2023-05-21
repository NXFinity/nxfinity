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

  todayDate: Date = new Date()
  private dataSource: any;
  user!: User;

  get buildVersion(): string {
    return 'Alpha.v.62a6c145';
  }

  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
