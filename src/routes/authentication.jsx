class Authentication {
  constructor() {
    this.authenticated = false;
    this.Username = "";
  }

  login(username, cb) {
    this.authenticated = true;
    localStorage.setItem("username", username);
    localStorage.setItem("user_status", "User_Logged_In");
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Authentication();
