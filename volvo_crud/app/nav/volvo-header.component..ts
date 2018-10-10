import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'volvo-header',
  templateUrl: 'volvo-header.component.html'
})

export class VolvoHeaderComponent {
  appName: string = "Volvo IT Solutions";
}
