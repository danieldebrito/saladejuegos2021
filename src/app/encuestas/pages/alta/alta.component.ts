import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Encuesta } from 'src/app/class/encuesta';
import { EncuestaService } from '../../encuesta.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public encuesta: Encuesta;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}"), this.spacesValidator]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{1,41}")]),
    edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99), Validators.pattern("^[0-9]*$")]),
    sexo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
    comentario: new FormControl('', [Validators.required]),
    juego: new FormControl('', [Validators.required]),
    usuario: new FormControl(''),
    terminos: new FormControl('', [Validators.required]),
  });

  public constructor(
    private authSvc: AuthService,
    private encuestaSvc: EncuestaService) { }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  public cargarEncuesta(): void {
    this.encuesta = this.formulario.getRawValue();

    this.encuesta.fecha = this.encuestaSvc.getfecha();

    /*
    puse el this.encuestaSvc.addItem(this.encuesta);    
    por que la funcion asincrona no me tomaba el usuario
    por qoe lo uiba a buscar y seguia la ejecuuoin
    y mandaba antes de tener eldato la carga a firebase
    
    */
    
    this.authSvc.user$.subscribe(
      item => {
        this.encuesta.usuario = item.email;
        this.encuestaSvc.addItem(this.encuesta);    
      }
    );

    

    this.formulario.reset({
      nombre: '',
      apellido: ''
    });

    //console.log(this.formulario.getRawValue());
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
