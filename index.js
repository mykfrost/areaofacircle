const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius *this.radius;
    }
};

console.log(circle.area);

//Error handling
try{
    const numbers = [1,2,3,4];

    const count = countOccurrences(null,4);
    
    console.log(count);
}
catch(error){
console.log(error.message);
}


function countOccurrences(array , searchElement){
//check if the first arguement is an array
if(!Array.isArray(array))
    throw new Error('Invalid Array');

    return array.reduce((accumulator , current) =>{
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    },0);
}