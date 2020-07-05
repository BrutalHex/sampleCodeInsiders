export default class Handle {
  readonly y: number = 483.24999;
  readonly width: number = 991;

  angle: number = 0;
  forceDiff: number = 0;

  constructor(angle: number = 0, forceDiff: number = 0) {
    this.angle = angle;
    this.forceDiff = forceDiff;
  }
}
