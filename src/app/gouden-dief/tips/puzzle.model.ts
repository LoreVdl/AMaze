import {Tips} from './tips.model';


export interface Puzzle {
  name: string;
  title: string;
  tips: Array<Tips>;
}
