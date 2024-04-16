// Check the type of triangle

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "Equilateral Triangle";
  if (a === b || b === c || c === a) return "Isoscales Triangle";

  return "Scalen Triangle";
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(2, 5, 6));
console.log(checkTriangleType(5, 5, 2));
