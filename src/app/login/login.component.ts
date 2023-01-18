import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacao: AutenticacaoService, private router: Router) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.errors);
    if (this.form.valid) {
      const { username, password } = this.form.value;
      if (this.autenticacao.validateAllFormFields(username, password)) {
        this.router.navigateByUrl('/hero/dashboard')
      }
      console.log('form submitted');
    }
  }
}
