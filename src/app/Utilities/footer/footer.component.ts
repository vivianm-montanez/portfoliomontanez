import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  fb=faFacebook
  linkedin=faLinkedin
  git=faGithub
  ig=faInstagram
}
