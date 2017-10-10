import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { SurvivorsService } from './../services/survivors.service';

@Component({
  selector: 'app-survivor-form',
  templateUrl: './survivor-form.component.html',
  styleUrls: ['./survivor-form.component.scss']
})

export class SurvivorFormComponent implements OnInit {
  public survivorForm;
  genders = ['M', 'F'];

  constructor(private formBuilder: FormBuilder, private service: SurvivorsService) {
    this.survivorForm = formBuilder.group({
      'name': ['', Validators.required],
      'age': ['', Validators.required],
      'gender': ['', Validators.required],
      'lat': ['', Validators.required],
      'long': ['', Validators.required],
      'water': ['0', Validators.required],
      'food': ['0', Validators.required],
      'ammo': ['0', Validators.required],
      'medicine': ['0', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    const lastposition = `point(${form.lat}, ${form.long})`;
    const items = `Water:${form.water};Food:${form.food};Ammunition:${form.ammo};Medicine:${form.medicine}`;

    const survivor = {
      name: form.name,
      age: form.age,
      gender: form.gender,
      lonlat: lastposition,
      items: items
    };

    this.survivorForm.reset();

    this.service.createSurvivor(survivor).subscribe(res => console.log(res));
  }

}
