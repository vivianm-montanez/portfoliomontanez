import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
add=faEnvelope
phone=faPhone
loc=faLocationDot
}
