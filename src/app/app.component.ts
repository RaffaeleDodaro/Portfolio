//app.component -> viene richiamato quando abbiamo la index.html e quando chiama l tah html <app-root>

//come funziona un componente in generale? con @Component va a creare un'istanza con:
//selector che e' il nome del tag html atttraverso il quale possiamo chiamare il componente
//templateUrl significa "da dove prendo il tag html?"
//styleUrls modiifichera' la pagina html presente nel templateUrl con nome uguale in templateurl

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}
//export class  e' la sintassi per creare una classe typescript