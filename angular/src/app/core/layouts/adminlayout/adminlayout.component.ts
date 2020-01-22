import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private router: Router, private alert: AlertService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      'key': ['', Validators.required]
    });
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigateByUrl("/auth/login");
  }

  search() {
    this.alert.info('Not yet implemented!');
    this.alert.error('Not yet implemented!');
  }

  accountSettings() {
    this.alert.success('Not yet implemented!');
    this.alert.warning('Not yet implemented!');
  }
}
