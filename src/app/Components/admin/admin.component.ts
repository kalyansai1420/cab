import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cabData from '../../Data/data.json'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  cab: any[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.cab.push(...cabData);
    console.log(cabData);
    console.log(this.cab);
  }
  submit(cabId: any) {
    console.log(cabId);
  }
}
