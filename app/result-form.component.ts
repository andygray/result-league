import {
  Component,
  Input,
  EventEmitter

} from 'angular2/core';

import {
	FormBuilder,
	Validators,
	Control,
	ControlGroup,
	FORM_DIRECTIVES
} from 'angular2/common';

import {Result} from './result';

interface Round {
    key: string;
    label: string;
}

@Component({
  selector: 'result-form',
  templateUrl: 'templates/result-form.html',
  styleUrls:[`css/result-form.css`],
  inputs: ['results'],
  outputs: ['result'],
  directives: [FORM_DIRECTIVES]
})
export class ResultFormComponent {

  results: Result[];

  result:EventEmitter = new EventEmitter();

  rounds: Round[];

  form: ControlGroup;
  name: Control;
  round: Control;
  score: Control;

	visible: boolean = true;

	constructor(private builder: FormBuilder) {

		this.rounds = [
		  {key:"r1", label:"Round 1"},
		  {key:"r2", label:"Round 2"},
		  {key:"r3", label:"Round 3"},
		  {key:"r4", label:"Round 4"}
		];

		this.nameId = new Control("", Validators.required);
		this.round = new Control("", Validators.required);
		this.score = new Control("", Validators.required);

		this.form = builder.group({
		  nameId: this.nameId,
			round: this.round,
			score: this.score
		});
	}

	toggleVisibility() {
	  this.visible = !this.visible;
	}

	submitData() {
     	this.result.next(this.form.value);

     	//reset
     	this.nameId.updateValue('');
     	this.round.updateValue('');
	    this.score.updateValue('');
	    this.toggleVisibility();
	}
}