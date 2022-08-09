/*
write class for movie
*/

console.log("class for Movie")

class Movie{
  constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getpg(moviearray){
    let finalResult=[];
    moviearray.filter((movie)=>{
      if(movie.rating=="PG"){
        finalResult.push(movie)
      }
    })
    return finalResult
  }
}

const vikram = new Movie("Vikram","Rajkamal International","PG16");
const pasanga2=new Movie("Pasanga-2","2D Entertainment");
const casino=new Movie("Casino Royal","Eon Production","PG13");

let moviearray=[vikram,pasanga2,casino];
console.log(pasanga2.getpg(moviearray));


// Write class for a circle

class Circle{
    constructor(radius=1,color="Red"){
      this.radius=radius;
      this.color=color;
    }
    getradius(){
      return `The circle radius is ${this.radius}`;
    }
    setradius(radius){
      return `The circle radius is ${this.radius=radius}`;
    }
    getcolor(){
      return `The circle radius is ${this.color}`;
    }
    setcolor(color){
      return `The circle radius is ${this.radius=color}`;
    }
    getarea(){
      return `The circle area is ${3.14*this.radius*this.radius}`;
    
    }
    getcircumstance(){
      return `The circle circumstance is ${2*3.14*this.radius}`;
    }
  
  }
  
  const circle1=new Circle()
  console.log(circle1)
  console.log(circle1.getradius())
  console.log(circle1.getcolor())
  console.log(circle1.getarea())
  console.log(circle1.getcircumstance())
  console.log(circle1.setradius(3))
  console.log(circle1.setcolor("blue"))  


// Write a “person” class to hold all the details.
console.log("“person” class to hold all the details")
class Person{
  constructor(name,age,dob,place,education,profession){
    this.name=name;
    this.age=age;
    this.dob=dob;
    this.place=place;
    this.education=education;
    this.profession=profession;
  }
}

const haribaskar= new Person("Haribaskar",27,"01-07-1995","Trichy","BE-Mech","Student at Guvi"); 

console.log(haribaskar);


console.log("Class for find the uber price");
// Write a class to calculate the uber price.
class Uber{
  constructor(baseprice,distance,carmodel){
    this.baseprice=baseprice;
    this.distance=distance;
    this.carmodel=carmodel;
  }
  getprice(distance){
    if(distance<=3){
      return this.baseprice;
    }
    else{
      return this.distance * this.baseprice
    }
  }
}

const uberprice=new Uber(35,8,"Honda City");
console.log(uberprice.getprice()); 


                                              