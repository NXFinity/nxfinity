import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { Profile, User } from "./interface/user.interface";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: ReplaySubject<User> = new ReplaySubject<User>(1);
  profile: ReplaySubject<Profile> = new ReplaySubject<Profile>(1);

  constructor(private httpService: HttpService) { }

  setUser(user: User) {
    this.user.next(user);
  }

  getUser() {
    return this.user.asObservable();
  }

  setProfile(profile: Profile) {
    this.profile.next(profile);
  }

  getProfile() {
    return this.profile.asObservable();
  }

  get(): Promise<User> {
    return this.httpService.get(`${this.httpService.apiBaseUrl}/users`).toPromise();
  }

  update(user: User): Promise<User> {
    return this.httpService.patch(`${this.httpService.apiBaseUrl}/users`, {user}).toPromise();
  }

  getProfileByUserId(userId: string): Promise<Profile> {
    return this.httpService.get(`${this.httpService.apiBaseUrl}/users/${userId}/profile`).toPromise();
  }

  updateProfileByUserId(userId: string, profile: Profile): Promise<Profile> {
    return this.httpService.patch(`${this.httpService.apiBaseUrl}/users/${userId}/profile`, {profile}).toPromise();
  }

  getCurrentUser() {
    return this.httpService.get(`${this.httpService.apiBaseUrl}/users/current`).toPromise();
  }
}
