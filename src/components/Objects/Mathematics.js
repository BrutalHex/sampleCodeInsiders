export default class  Mathematics
{

     static CalculateEquilibreumAngle(left,right)
     {
            var tan=(left-right)/(left+right);
            return Math.atan(tan);
     }



}