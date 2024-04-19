// even number
for(var i=0;i<200;i++){
  if(i%2==0){
      console.log(i);
  }
}
// while loop
var i=0;
while(i<200){
  if(i%2==0){
       console.log(i);
  }
  i++;
}

//do while
var i=0;
do{
    if(i%2==0){
        console.log(i);
    }i++;
}while(i<200)
// even numbers between 1-100
for(var i=0;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}
// while loop for 1-100 even numbers
var i=0;
while(i<100){
    if(i%2==0){
        console.log(i);
    }
    i++;
}
//do while for 1-100 even numbers
var i=0;
do{
    if(i%2==0){
        console.log(i)
    }i++;
}while(i<100)
// factors of 4
var i=4;
var j;
for(j=1;j<=4;j++){
    if(i%j==0){
        console.log(j);
    }
}
//prime number
var n=5;
prime=0
for(j=2;j<n;j++){
    if(n%j==0){
        prime++;
        break;
    }
}
if(prime==0)
console.log(n+" is prime number")
else
console.log(n+" is not prime");

// fibonacci series 
var a=0,b=1;
console.log(a);
console.log(b);
for(var i=1;i<=10;i++){
    var sum=a+b;
    console.log(sum);
    a=b;
    b=sum;
}
// pattern
for(var i=1;i<=5;i++){
    var str="";
    for( var j=1;j<=i;j++){
        str+=j;
    }
    console.log(str);
}
// //reverse pattern
console.log("reverse pattern");
for(var i=5;i>=1;i--){
    var str="";
    for(j=1;j<=i;j++){
        str+=j;
    }
    console.log(str);
}
//star pattern
for(var i=5;i>=1;i--){
    var str="";
    for(j=1;j<=i;j++){
        str+="* ";
    }
    console.log(str);
}
console.log("reverse pattern")
for(var i=1;i<=5;i++){
    var str="";
    for(var j=1;j<=i;j++){
        str+="* ";
    }
    console.log(str);
}
//another approach for reverse pattern
// for(var i=1;i<=5;i++){
//     var s="";
//     for(var j=1;j<=5-i+1;j++){
//         s+=j+" ";
//     }
//     console.log(s);
// }

var x="10 33 40";
console.log(parseInt(x));
console.log(parseFloat(x));