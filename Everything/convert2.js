// convert.js				Dave Reed
// Functions for converting between English and Metric values
///////////////////////////////////////////////////////////////

function InchesToCentimeters(inches)
// Assumes: inches is a distance, measured in inches
// Returns: the corresponding distance in centimeters
{
  var cm;

  cm = inches * 2.54;
  return cm;
}

function CentimetersToInches(cm)
// Assumes: cm is a distance, measured in centimeters
// Returns: the corresponding distance in inches
{
  var inches;

  inches = cm / 2.54;
  return inches;
}

function KilogramsToPounds (kg)
// Assumes: kg is a distance, measured in kilograms
// Returns: the corresponding distance in pounds
{
  var lb;
 
  lb= kg*2.205;
  return lb;
}

function PoundsToKilograms (lb)
// Assumes: lb is a distance, measured in pounds
// Returns: the corresponding distance in kilograms
{
   var kg;

  kg= lb/2.205;
  return kg;
}

function SquaremeterToSquarefeet (sm)
// Assumes: sm is a distance, measured in squaremeter
// Returns: the corresponding distance in Squarefeet
{
   var sm;

  sf= sm*10.764;
  return sf;
}

function SquarefeetToSquaremeter (sf)
// Assumes: sf is a distance, measured in squarefeet
// Returns: the corresponding distance in Squaremeter
{
   var sf;

  sm= sf/10.764;
  return sm;
}


