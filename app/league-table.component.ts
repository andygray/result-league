import {Component, OnInit} from 'angular2/core';
import {Result} from './result';
import {ResultService} from './result.service';
import {ResultFormComponent} from './result-form.component'
import {TableSortPipe} from "./pipe";

@Component({
  selector: 'league-table',
  templateUrl:`templates/league-table.html`,
  styleUrls:[`css/league-table.css`],
  directives: [ResultFormComponent],
  providers: [ResultService],
  pipes: [TableSortPipe],
})
export class LeagueTableComponent implements OnInit {
  
  results: Result[];

  constructor(private _resultService: ResultService) { }

  getResults() {
    this._resultService.getResults().then(results => this.results = results);
  }
  
  onRate(value) {
    for (var r of this.results) {
      // the unary + converts to number 
      if (r.id === +value.nameId) {
        r[value.round] = value.score;
      }
    }
  }

  ngOnInit() {
    this.getResults();
  }
}
