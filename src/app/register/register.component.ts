import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  constructor(private registerService: RegisterService,
    private router: Router) { }

  userForm = new FormGroup({

    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });



  destroy$: Subject<boolean> = new Subject<boolean>();

  onRegister() {

    this.registerService.registerUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      // console.log('message::::', data);
      if (data.status == 201) {
        this.router.navigateByUrl('/login');
      }
    });
  }
  ngOnDestroy(): void {
  }

}
