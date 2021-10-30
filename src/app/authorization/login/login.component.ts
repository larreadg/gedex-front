import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  icon="pi pi-sign-in";
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService, private messageService: MessageService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login = () => {
    if(this.form.valid){
      this.icon = "pi pi-spin pi-spinner";
      this.loading = true;
      this.authService.login(this.form.value).subscribe(
        result => {
          this.authService.setSession(result.data?.usuario, result.data?.token);
          this.router.navigate(['/']);
        },
        err => {
          let { error } = err;
          this.loading = false;
          this.icon="pi pi-sign-in";
          this.messageService.add({severity:'error', summary:'Gedex', detail:error.data?.error});
        }
      )
    }
  }
}
