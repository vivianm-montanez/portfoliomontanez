import { Component } from '@angular/core';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  faDes = faDesktop;
  faWeb = faFileCode;
}
