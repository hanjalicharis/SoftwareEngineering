import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  constructor(private loginService: LoginService,
    private router: Router) { }

  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });



  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {

    this.loginService.loginUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      // console.log('message::::', data);
      if (data.status == 200) {
        this.router.navigateByUrl('/corona');
      }
    });
  }

  ngOnDestroy(): void {
  }

}
