


function setup() {
  createCanvas(800,800);
//  for (i = 1 ; i <= 10; i = i + 1)
//  {
//    console.log("yashika")
//  }
// for (i = 1 ; i <= 20 ; i = i + 1)
// {
//  console.log(i)
// }
// for (i = 2 ; i <= 20 ; i = i + 2)
// {
//   console.log(i)
// }
// for (i = 1 ; i <= 50 ; i = i + 1)
// {
//   if (i%5 == 0)
//   {
//    console.log(i)
//   }
// }
// for (i = 50 ; i <= 60 ; i = i + 1 )
// {

//     console.log(i%10)
//   }                                 

// var a = 13
// i = a % 10
// j = Math.trunc(a / 10)
// console.log(i+j)

// for (i = 10 ; i <= 20 ; i = i + 1)
// {
 
//  c = i % 10 
//  j = Math.trunc(i / 10)
//  console.log(c+j)
// }

//var count = 0;
// for (i = 1 ; i <= 30 ; i = i + 1)
// {
//  if (i%2 == 0)
//  {
//   count = count + 1
// }
// }
// console.log(count)

// var a = [10,20,30,40,50]
// for (i  = 0 ; i <= 4 ; i = i+ 1)
// {
//  console.log(a [i])
// }
// var a = [5,10,15,20,25,30]
// for (i = 0; i <= 5 ; i = i + 1)
// {
//   if (a[i] % 2 == 0)
//   {
//     console.log(a[i])
//   }


//reversethenumber()
//marks()
//searchingelement()
//oddnumber()
//maximum()
callAPI()



  
}

function draw() {
  background("black");  
 
  
}
function positivenumber()
{
 var a = [-1,2,-3,4,-5]
 for (i = 0 ; i <= 5 ; i = i + 1)
 {
   if (a[i] >= 0)
   {
     console.log(a[i])
   }}}
function reversethenumber()
{
 var a = [1,2,3,4,5]
 for (i = 4 ; i >= 0 ; i = i - 1)
 {
  console.log(a[i])
 }
}
function reversenum()
{
 var a = 14
 i = a % 10
 j = Math.trunc(a / 10)
 c = i * 10 + j
 console.log(c)
}
function marks()
{
 var a = [10,20,30,40,50]
 var b = [15,25,35,45,55]
 var c = [12,23,34,45,56]
 var j =0
 for (i = 0 ; i < 5 ; i = i + 1)
 {
  j = (a[i]+b[i]+c[i])/3
  console.log(j)
 }}
 function searchingelement()
 {
  var a = [10,20,30,40,50]
  var s = 60
  var c = 0;
  for(i = 0 ; i <=5 ; i = i + 1)
  {
   if (a[i] == s)
   {
    c = 1
    break
   } 
  }
  if (c == 1)
  {
   console.log("search Succesful")
  }
  else
  {
   console.log("search unsuccesful")
  }
 }
 function oddnumber()
 {
  var a = [17, 20, 24, 29, 16, 87, 19, 52] 
  var b = 1
  for (i = 0 ; i <= 8 ; i = i + 1)
  {
   if (a[i] %2 == 1) 
   {
    b = a[i] * b
   }
  }
  console.log(b)
 }
function maximum()
{
 var a = [17, 20, 24, 29, 16, 87, 19, 52]
 var b = 0
 for (i = 0 ; i <= 8 ; i = i + 1)
 {
  if (a[i] > b)
  {
   b = a[i] 
  }
 }
 console.log(b)
}
 async function callAPI()
{
 var response = await fetch ("http://worldclockapi.com/api/json/pst/now")
  var data = await response.json()
 var i = data.timeZoneName
console.log(i)

}


