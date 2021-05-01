import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    edad: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8),Validators.min(18), Validators.max(99), Validators.pattern("^[0-9]*$")]),
    sexo: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
    comentario: new FormControl('', [Validators.required]),
    terminos: new FormControl('', [Validators.required]),
  });

  public constructor(private fb: FormBuilder) {}

  public aceptar(): void {
    console.log(this.formulario.getRawValue());
  }

  ngOnInit(): void {

  }
}


/*
    this.formulario = this.fb.group({
      'gridRadios1': ['', [Validators.required, ]],
      'gridRadios2': ['', [Validators.required, ]],
      'gridRadios3': ['', [Validators.required, ]],
      'gridRadios4': ['', [Validators.required, ]],
    });

*/
