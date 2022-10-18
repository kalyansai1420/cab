import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import cabData from '../../Data/data.json';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css'],
})
export class CabDetailsComponent implements OnInit {
  cab: any[] = [];
  cabId;
  id;

  // selectedCab = null;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.cabId = this._route.snapshot.params['cabId'];
    });
    this.cab.push(...cabData);
   
  }

  bookaride() {
    Swal.fire('Success', 'Booking Confirm', 'success');
  }
}
