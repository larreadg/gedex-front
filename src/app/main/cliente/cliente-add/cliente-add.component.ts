import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { LocalService } from '../../../services/local.service';
import { ClienteService } from '../../../services/cliente.service';

declare var L:any;
@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.scss']
})
export class ClienteAddComponent implements OnInit {

  items!: MenuItem[];
  form: FormGroup;
  map!: any;
  marker!:any;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private localService: LocalService, 
    private clienteService: ClienteService, private messageService: MessageService) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      ruc: ['', Validators.required],
      contacto_email: ['', Validators.compose([Validators.required, Validators.email])],
      contacto_telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      codigoPostal: [''],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      pais: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.items = [
      {icon: 'pi pw pi-home', routerLink: '/'},
      {label:'Clientes', routerLink: '/clientes'},
      {label:'Agregar Cliente'}
    ];
    this.mapa();
  }

  guardarCliente = () => {
    if(this.form.valid){
      this.loading = true;
      this.clienteService.guardarCliente(this.form.value).subscribe(
        result => {
          this.messageService.add({key:'cliente-toast',severity:'success', summary:'Gedex', detail:'Cliente guardado'});
          this.form.reset();
          this.marker && this.map.removeLayer(this.marker);
        },
        err => {
          this.messageService.add({key:'cliente-toast',severity:'error', summary:'Gedex', detail:'Error al guardar cliente'});
        }
      )
      console.log(this.form.value);
    } else {
      this.messageService.add({key:'cliente-add',severity:'error', summary:'Gedex', detail:'Complete los campos obligatorios'});
    }
  }

  mapa = () => {
    try{
      this.map = new L.Map('locationPicker', {});

      let osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      let osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
      let osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});		
      this.map.setView([-25.287156078407357, -57.5877712314676],10);
      this.map.addLayer(osm);
      
      this.map.on('click', (e:any) => { 
        this.limpiarDireccion();       
        let popLocation= e.latlng;
        this.marker && this.map.removeLayer(this.marker);
        this.marker = new L.marker(popLocation);
        this.map.addLayer(this.marker);
        this.localService.getLocation(popLocation.lat, popLocation.lng).subscribe(
          data => {
            console.log(data);
            if(data.address.road){
              this.form.controls['direccion'].setValue(data.address.road);
            } else if(data.address.neighbourhood) {
              this.form.controls['direccion'].setValue(data.address.neighbourhood);
            }
            if(data.address.city){
              this.form.controls['ciudad'].setValue(data.address.city);
            }
            if(data.address.postcode){
              this.form.controls['codigoPostal'].setValue(data.address.postcode);
            }
            if(data.address.state){
              this.form.controls['departamento'].setValue(data.address.state);
            } else if(data.address.region) {
              this.form.controls['departamento'].setValue(data.address.region);
            }
            if(data.address.country){
              this.form.controls['pais'].setValue(data.address.country);
            }
            this.form.controls['latitud'].setValue(popLocation.lat);
            this.form.controls['longitud'].setValue(popLocation.lng);
          }
        )
      });
      
    }catch(e){}
  }

  limpiarDireccion = () => {
    this.form.controls['direccion'].setValue('');
    this.form.controls['codigoPostal'].setValue('');
    this.form.controls['ciudad'].setValue('');
    this.form.controls['departamento'].setValue('');
    this.form.controls['pais'].setValue('');
  } 
}
