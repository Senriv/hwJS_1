let x = 6;
let y = 14;
let z = 4;

/* x += y - x++ * z ;
z = --x - y * 5 ;
y /= x + 5 % z;
z - x++ + y * 5;
x = y - x++ * z; */

/*
#1
let sum = x += y - x++ * z;
console.log('x += y - x++ * z = ' + sum)
1) x++
2) *
3) -
4) +
*/

/*
#2
let sum = z = --x - y * 5;
console.log('z = --x - y * 5 = ' + sum)
1)--x
2)y * 5
3)-
*/

/*
#3
let sum = y /= x + 5 % z;
console.log('y /= x + 5 % z = ' + sum)
1)5 % z
2)+
3)/=
*/

/*
#4
let sum = z - x++ + y * 5;
console.log('z - x++ + y * 5 = ' + sum)
1)x++
2)-
3)+
*/

/*
#5
let sum = x = y - x++ * z;
console.log('x = y - x++ * z = ' + sum)
1)x++
2)*
3)-
4)=
*/