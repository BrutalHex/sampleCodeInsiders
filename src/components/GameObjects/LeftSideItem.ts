import RandomShape from './RandomShape';
import RandomGenerator from '../../base/RandomGenerator';

export default class LeftSideItem extends RandomShape {
  timeSnap: number;

  constructor(timeSnap: number) {
    super(RandomGenerator.getRndInteger(30, 400), 0);

    this.timeSnap = timeSnap;
  }
}
