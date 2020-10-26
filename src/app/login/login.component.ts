import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <h1>Login Form</h1>
      <form>
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email"/>
          </div>
          <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd"/>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <button type="submit" class="btn btn-danger">Cancel</button>
      </form>
    </div>
  `,
  styles: [
    '.form-control{width: 50% !important;}'
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
