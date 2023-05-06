import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLink, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  add=faEnvelope
  phone=faPhone
  loc=faLocationDot
  fb=faFacebook
  linkedin=faLinkedin
  git=faGithub
  ig=faInstagram
}
