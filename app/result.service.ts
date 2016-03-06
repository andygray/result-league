import {Result} from './result';
import {RESULTS} from './mock-results';
import {Injectable} from 'angular2/core';

@Injectable()
export class ResultService {
  getResults() {
    return Promise.resolve(RESULTS);
  }
}
