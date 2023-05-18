export interface User {
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  age: number;
  login: string;
  picture: string;
}

export interface Profile {
  id: string;
  bio: string;
  avatar: string;
  cover: string;
  location: string;
  website: string;
}
