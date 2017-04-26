export class User {

  id: number;
  login: string;
  password: string;
  role: string;
  enabled: boolean;

  constructor(id: number, login: string, password: string, role: string, enabled: boolean) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.role = role;
    this.enabled = enabled;
  }
}
