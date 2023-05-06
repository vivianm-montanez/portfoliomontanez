import { Component } from '@angular/core';
import { faDesktop, faLayerGroup, faMobile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
desktop=faDesktop
webdev=faLayerGroup;
app=faMobile
}
