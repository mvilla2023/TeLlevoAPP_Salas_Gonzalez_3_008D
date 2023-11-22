import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.page.html',
  styleUrls: ['./form-viaje.page.scss'],
})
export class FormViajePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


//@Component({
//  selector: 'app-form-prestar',
//  templateUrl: './form-prestar.page.html',
//  styleUrls: ['./form-prestar.page.scss'],
//})
//export class FormPrestarPage implements OnInit {
//  @ViewChild('inputAutocmplt') inputAutocmplt: ElementRef;
//  numPasajeros: any;
//  patente: any;
//  salida: any;
//  valor: any;
//  viaje: Viaje = {} as Viaje;
//  destino: { lat: number; lng: number; direccion: string };
//  googleMaps: any;
//  autocomplete: any;
//  sesion: any;
//  constructor(private gmaps: GmapsService,
//              private api: DatosService,
//              private navController: NavController) { }
//
//  ngOnInit() {
//    this.sesion = JSON.parse(localStorage.getItem('sesion'));
//    this.borrarViajesInvalidos();
//    this.cargarServicio().then(() => {
//      this.iniciarAutocompletado();
//    });
//  }
//
//  async cargarServicio(){
//    this.googleMaps = await this.gmaps.loadGoogleMaps();
//}
//
//  iniciarAutocompletado(){
//    this.autocomplete = new this.googleMaps.places.Autocomplete(this.inputAutocmplt.nativeElement, {
//      componentRestrictions: { country: ['cl'] },
//      fields: ['address_components', 'geometry'],
//      types: ['address'],
//    });
//
//    this.inputAutocmplt.nativeElement.focus();
//    this.autocomplete.addListener('place_changed', () => {
//      const place = this.autocomplete.getPlace();
//      this.destino = {
//       lat: place.geometry.location.lat(),
//       lng: place.geometry.location.lng(),
//       direccion: this.inputAutocmplt.nativeElement.value
//      };
//    });
//  }
//
//  async agregarViaje(){
//    this.viaje = {
//      patente: this.patente,
//      hora: this.salida,
//      valorViaje: parseInt(this.valor, 10),
//      destino: this.destino,
//      cantidadPasajeros: parseInt(this.numPasajeros, 10),
//      estado: 'activo',
//      conductor: this.sesion.id
//    };
//
//    await this.api.createViaje(this.viaje);
//    this.navController.navigateRoot('/esperando-pasajero');
//  }
//
//  async borrarViajes(){
    // const idViaje = await this.api.getViajeActivoConductor(this.sesion.id);
    // this.api.setEstadoViaje(idViaje.id, 'cancelado');
//  }

//  async borrarViajesInvalidos(){
//    const idViaje = await this.api.getViajeActivoConductor(this.sesion.id);
//    console.log(idViaje);

//    if (idViaje) {
//      for (const v of idViaje){
//        v.estado = 'invalido';
//        this.api.updateViaje(v);
//      }
//    }
//  }

//}//
