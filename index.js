
// let radius = 1;
// let x = 1;
// let y = 1;

//Object-oriented programming OOP



//circle.draw();


//factory function

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw')
        }         
    } 
}


const circle1 = createCircle(1);
// console.log(circle1);

//constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
        }
    return this;
}

const circle = new Circle(1);

circle.color='yellow';
console.log(circle);

 for(let key in circle1)
     console.log(key);

 for(let key of Object.keys(circle1))
    console.log(key);

 for(let entry of Object.entries(circle1))
    console.log(entry);

 if('radius' in circle1)console.log('yes');
