//-------------- if 10 ---------------
// let A = 1
// let B = 4

// if (A==B){
//     A += 0
//     B += 0
// } else{
//     A = A + B
//     B = B + A
// }
// console.log(A,B);

//-------------- if 11 ---------------

// let A = 5
// let B = 3

// if (A==B){
//     A += 0
//     B += 0
//     console.log(A,B);
// } else if (A<B){
//     A+=B
//     B+=B
//     console.log(A,B);
// } else if (A>B){
//     B+=A
//     A+=A
//     console.log(A,B);
// }

//-------------- if 12 ---------------

// let a = 2
// let b = 4
// let c = 1

// if (a<b && b<c){
//     console.log(a);
// } else if (b<a && a<c){
//     console.log(b);
// } else if (b<c && c<a){
//     console.log(b);
// } else if (c<b && b<a){
//     console.log(c);
// } else if (c<a && a<b){
//     console.log(c);
// }

//-------------- if 13 ---------------

// let a = 2
// let b = 0
// let c = 1

// if (a<b && b<c){
//     console.log(b);
// } else if (b<a && a<c){
//     console.log(a);
// } else if (b<c && c<a){
//     console.log(c);
// } else if (c<b && b<a){
//     console.log(b);
// } else if (c<a && a<b){
//     console.log(a);
// }

//-------------- if 14 ---------------

// let a = 6
// let b = 4
// let c = 1

// if (a<b && b<c){
//     console.log(a,c);
// } else if (b<a && a<c){
//     console.log(b,c);
// } else if (b<c && c<a){
//     console.log(b,a);
// } else if (c<b && b<a){
//     console.log(c,a);
// } else if (c<a && a<b){
//     console.log(c,b);
// }

//-------------- if 15 ---------------

// let a = 2
// let b = 0
// let c = 1

// if (a<b && b<c){
//     console.log(b,c);
// } else if (b<a && a<c){
//     console.log(a,c);
// } else if (b<c && c<a){
//     console.log(c,a);
// } else if (c<b && b<a){
//     console.log(b,a);
// } else if (c<a && a<b){
//     console.log(a,b);
// }

//-------------- if 16 ---------------

// let A = 1
// let B = 6
// let C = 5

// if (A<B && B<C){
//     A *= 2
//     B *= 2
//     C *= 2
//     console.log(A,B,C);
// } else {
//     console.log(A*= -1, B*= -1, C*= -1);
// }

//-------------- if 17 ---------------

// let A = 6
// let B = 5
// let C = 4

// if (A<B && B<C){
//     A *= 2
//     B *= 2
//     C *= 2
//     console.log(A,B,C);
// } else if (B<A && A<C){
//     console.log(-A,-B,-C);
// } else if (C<A && A<B){
//     console.log(-A,-B,-C);
// } else if (A<C && C<B){
//     console.log(-A,-B,-C);
// } else if (B<C && C<A){
//     console.log(-A,-B,-C);
// } else if (C<B && B<A){
//     A *= 2
//     B *= 2
//     C *= 2
//     console.log(A,B,C);
// }  else{
//     console.log(-A,-B,-C);
// }

// -------------- if 18 ---------------

// let A = 5
// let B = 3
// let C = 5

// if (A==B){
//     console.log(Number(String(A,B,C).indexOf(C)));
// } else if(A==C){
//     console.log(Number(String(A,B,C).indexOf(B)));
// }

// -------------- if 18 ---------------

let a = 2
let b = -20 
let c = 3

let ab = (a-b)* -1
let ac = (a-c)* -1

if(ab<ac){
    console.log(ab);
} else if (ab>ac){
    console.log(ac);
}