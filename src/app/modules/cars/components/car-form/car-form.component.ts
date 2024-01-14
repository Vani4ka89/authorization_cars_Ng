import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CarService} from "../../../../services";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarService) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  _initForm(): void {
    this.form = this.fb.group({
      brand: [''],
      price: [''],
      year: ['']
    })
  }

  create(): void {
    this.carService.create(this.form.value).subscribe()
  }
}
