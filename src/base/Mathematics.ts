export default class Mathematics {
  static CalculateEquilibreumAngle(right: number, left: number) {
    if (left === 0) {
      // there is no item in the left
      return 0;
    }

    var tan = (right - left) / (right + left);
    console.log('tan   ' + tan);
    return Math.atan(tan) * 57.296;
  }

  static GetMaxAngle(angle: number, max: number) {
    if (angle < 0) {
      if (angle < -1 * max) {
        return -1 * max;
      }
    } else {
      if (angle > max) {
        return max;
      }
    }
    return angle;
  }
}
