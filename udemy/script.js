'use strict';

const restaurant = {
    name: 'Classico Italian',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // open 24 hours
            close: 24,
        },
    },

    oder: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function(ing1, ing2, ing2) {
        console.log(`Here is your declicious pasta with $
        {ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        this.console.log(mainIngredient);
        this.console.log(otherIngredient);
},
};

// res

console.log('---- OR ----);')
// Use ANY DATA type, return ANY DATA type, short-circuiting
console.log(3 ||'Jonas');
console.log('' ||'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const quets1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const quets2 = restaurant.numGuests || 10;
console.log(quets2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && ' jonas');


// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza
('mushrooms', 'spinach');

//SPREAD, because on TRICH side of =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu, 
    ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function(...numbers ) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};
    add(2, 3);
    add(5, 3, 7, 2);
    add(8, 2, 5, 3, 2, 1, 4);

    const x = [23, 5, 7];
    add(...x);

    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
    restaurant.orderPizza('mushrooms');



/*
////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const NewArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenu = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurants.mainMenu, ...restaurants.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log('${...str} Schmedtmann');


// Real - wold example
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt('Ingredient 27'),
    prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], 
    ingredients[2]);
    restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: ...
    restaurant, fouder: 'Guiseppe' };
    console.log(newRestaurant);

    const restaurantCopy = {...restaurant};
    restaurantCopy.name = 'Ristorante Roma';
    console.log(restaurantCopy.name);
    console.log(restaurant.name);
    

restaurants.orderDelivery({
    time:'22:30',
    addres: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,

});

const { name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const { 
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { manu = [], restaurant: starter = [] } = restaurant;
console.log(menu, starters);

// Mutting varlables
let a = 111;
let b = 999;
const abj = {a: 23, b: 7, c: 14};
({ a, b} = abj);
console.log(a, b);

//Nested objects
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*



const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);   

const [main, , secondary] = restaurant.categories();
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values true or function

const [starter, mainCourse] = restaurants.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);