import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public formulario: FormGroup;

  public constructor(private fb: FormBuilder) {}

  public aceptar(): void {
    console.log(this.formulario.getRawValue());
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'telefono': ['', [Validators.required, ]],
      'textarea': ['', [Validators.required, ]],
      'gridRadios1': ['', [Validators.required, ]],
      'gridRadios2': ['', [Validators.required, ]],
      'gridRadios3': ['', [Validators.required, ]],
      'gridRadios4': ['', [Validators.required, ]],
      'terminos': ['', Validators.required]
    });
  }
}
