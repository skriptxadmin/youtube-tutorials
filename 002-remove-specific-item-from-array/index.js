const fruits = ['apple', 'banana', 'orange', 'grapes', 'perry', 'banana'];

const omit_fruit = 'apple';

// Option 5: Using Reverse For 

for(let i = fruits.length-1; i>=0; i--){

    if(fruits[i] == omit_fruit){

        fruits.splice(i, 1);
    }
}

console.log(fruits);

// Option 4: Using Filter

/*

const result = fruits.filter(function(fruit){
    return fruit != omit_fruit;
})

console.log(result)

*/

// Option 3: Collect Indices and Splice

/*
const indices = collect_indices();

 remove_based_on_indices(indices);

function remove_based_on_indices(indices){

    const indicesReveresed = indices.reverse();

    for(let i = 0; i < indicesReveresed.length; i++){

        const index = indices[i];

        fruits.splice(index, 1);

    }
}

function collect_indices(){

    let ret = [];
    for(let i =0; i < fruits.length; i++){

        if(fruits[i] == omit_fruit){

            ret.push(i);
        }
    }

    return ret;
}


*/

// Option 2: Using Index Of

/*
using_indexOf(omit_fruit);


function using_indexOf(fruit){

    const index = fruits.indexOf(fruit);

    fruits.splice(index, 1);


}


console.log(fruits)



//Disadvantage: Only first occurence will be removed.


*/


// Option 1: Using For Loop

/*
const result = using_for_loop(omit_fruit);


function using_for_loop(fruit){
    let ret = [];

    for(let i = 0; i < fruits.length; i++){
    
        if(fruits[i] != omit_fruit){
    
            ret.push(fruits[i]);
    
        }
    
    }
    
    return ret;
}


console.log(result);

*/