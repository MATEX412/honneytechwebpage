import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalInterfaceComponent } from './Views/principal-interface/principal-interface.component';
import { ShopInterfaceComponent } from './Views/shop-interface/shop-interface.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalInterfaceComponent, ShopInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
