// for (var i=1;i<=10;i=i+2){
//       console.log(i)
// }

var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var odd=[];
var even=[]
for(var i=0; i<numbers.length; i++){
      var number=(numbers[i])
      if(number%2==0){
            even.push(number)
      }
      else{
            odd.push(number)        
      }
}
console.log(odd)
console.log(even)