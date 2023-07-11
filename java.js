//const person=[30,80,20,500,650,1,2,789]
//document.getElementById("").innerHTML = person;

//person.sort(function(a,b){return(a-b)});
//document.getElementById("").innerHTML = person;


//console.log(person)

let points = [1,2,3,4,5,6,7,8,9,10]
let Odd = [ ]
let Even = [ ]

for(let i=0; i<points.length; i++)
 {
     if(points[i]%2==0){
        Even.push(points[i])
     } 
     else
     {     
      Odd.push(points[i])
     }
     }
     console.log(Even)
     console.log(Odd)
     document.write(points + "<br>") 
     document.write(Even + "<br>")
     document.write(Odd)
     