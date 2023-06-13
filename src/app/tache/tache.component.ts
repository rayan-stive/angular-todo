import { Component } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent {
  tache = {
    nom : 'DO list',
    date : 'Today',
    favoris: true
  }
}
