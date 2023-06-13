import { Component } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent {
  date: Date = new Date()
  tache:number = 15

  taches = {
    nom : 'DO list',
    date : this.date,
    favoris: true
  }
}
