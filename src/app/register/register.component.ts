import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="container">
      <h1>Register Yourself</h1>
      <form>
          <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email"/>
          </div>
          <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd"/>
          </div>
          <div class="form-group">
              <label for="repwd">RePassword:</label>
              <input type="password" class="form-control" id="repwd"/>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
          <button type="submit" class="btn btn-danger">Cancel</button>
      </form>
    </div>
  `,
  styles: [
    '.form-control{width: 50% !important;}'
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
