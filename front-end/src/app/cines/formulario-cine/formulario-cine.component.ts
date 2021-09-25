import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form!:FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo!: cineDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['',{
        Validators: [Validators.required]
      }],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud:this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }

}
