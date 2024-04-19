//fibonacci series with functions
// debugger;
// function fibonacci(n){
//     var a=0,b=1;
//     console.log(a);
//     console.log(b);
//     for(var i=0;i<10;i++){
//         var sum=a+b;
//         console.log(sum);
//         a=b;
//         b=sum;
//     }  
// }
// fibonacci(10);
//cheking given number is prime or not
// function primeNumber(n){
//     if(n>1){
//          var prime=0;
//          for(i=2;i<n;i++){
//             if(n%i==0){
//                 prime++;
//                 break;
//             }
//          }
//          if(prime==0){
//             console.log(n+" is prime");  
//          }
//         else{
//             console.log(n+" is not prime");
//         }
//     }
// }
// primeNumber(7);
//string palindrome
// function StringPalindrome(str){
//     var str;
//     var org=str;
//     var s="";
//     var temp=str.length-1;
//     for(i=temp;i>=0;i--){
//         var rev=str[i];
//         s+=rev;
//     }
//     // console.log(s);
//     if(s==org){
//         console.log("palindrome");
//     }
//     else {
//         console.log("not palindrome");
//     }
// }
// StringPalindrome("nikki");
// StringPalindrome("mom");
// //number palindrome
// function NumPalindrome(n){
//     var n;
//     var rev=0;
//     var temp=n;
//     while(temp>0){
//          var a=temp%10;//1//5//1
//          rev=10*rev+a;//1//15//151
//          temp=parseInt(temp/10);//15//1//0 condition fails
//     }
// if(n==rev){
//     console.log("palindrome");
// }
// else {
//     console.log("not palindrome");
// }
// }
// NumPalindrome(151);
// NumPalindrome(1241);

//factorial
// function Factorial(n){
//     var n;
//     var fact=1;
//     for(i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return fact;
// }
// console.log(Factorial(4));
//LCD and GCM of given number
//lcm
// var n1=4,n2=6;
// var max=(n2>n1)?n2:n1; //(n2>n1)?true:false
// var lcm=max;
// while(true){
//     if(lcm%n1==0 && lcm%n2==0){ //6%4!=0 && 6%6==0 //7%4!=0 //8%4==0 && 8%6!=0 //9%4!=0 //10%4!=0 //12%4==0 && 12%6==0
//         break;
//     }
//     lcm++; //7 //8 //9 //10 //11 //12
// }
// console.log(lcm);
// //gcf
// var n1=6,n2=16;
// var min=(n1<n2)?n1:n2; 
// // var gcf=min;
// var gcf;
// for(i=1;i<=min;i++){
//     if(n1%i==0 && n2%i==0){
//         // console.log(i);
//         gcf=i;
//     }
// }
// console.log(gcf);
//square and squareroot
function sqrt(n){
    // var a;
    // var sqr=a*a;
    // console.log(sqr);
    // var chk=0;
    var a=26;
    var chk=0;
    for(i=1;i<n;i++){
        if(i*i==n){
            chk++;
            console.log(i);
        }
    }
    if(chk==0){
        console.log("not a perfect square");
    } 
}
sqrt(25);










