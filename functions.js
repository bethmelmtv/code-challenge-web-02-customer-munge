/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
  // just map over them to make a greeting
  const greeting = customers.map(
    (customer) => `Hello ${customer.first_name} ${customer.last_name}`
  );
  return greeting;
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
  // first, filter over the user to get the ones over 60
  const overSixty = customers.map(({ age }) => age > 60);
  // then map over them to make a greeting
  const elderGreeting = overSixty.map(
    ({ first_name, last_name }) => `Hello ${first_name} ${last_name}`
  );
  return elderGreeting;
}

/* 
Output: 
2125
*/

export function addAllAges(customers) {
  // reduce through the customers to make a sum
  const sum = customers.reduce(
    (accumulater, currentPerson) => accumulater + currentPerson.age,
    0
    // accululamtor starts at 0, which is line 38
  );

  return sum;
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
  const cool = [];
  // map through to make an array of cool factors
  const factors = customers.map(({ cool_factor }) => cool.push(cool_factor));
  // then reduce through that array to get a sum
  factors.reduce((accumulator, currentPerson) => {
    const numbersofar = accumulator + currentPerson.cool_factor;
    return numbersofar / customers.length;
  }, 0);
  // then divide by the total number of customers
}

/* 
Output: 
{
    female: 42,
    male: 39,
    nonbinary: 8,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
  // customers.map(({gender}) => total.push(gender));

  customers.reduce((accumulator, customer) => {
    //accumulator is the previous value,
    if (accumulator[customer.gender]) {
      accumulator[customer.gender]++;
    } else {
      accumulator[customer.gender] = 1;
    }

    return accumulator;
  }, {});
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
  //get all customers who have Fords
  //then filter by gender and accumulate by gender
  const fordOwners = customers.map((customer) => customer.car_make === "Ford");

  fordOwners.reduce((accumulator, gender) => {
    if (accumulator[gender.type]) {
      accumulator[gender.type]++;
    } else {
      accumulator[gender.type] = 1;
    }
    return accumulator;
  }, {});
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 6,
        nonbinary: 0,
    },
    mercedes:  {
        female: 5,
        male: 4,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
  //get all the customers
  //get all car makes and put in my accumulator
  //our filter will be inside our reduce
  //filter is inside for that specific fcar make
  //
  //use reduce twice
  return true;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/

export function getAllCoolFactorsOfEachCar(customers) {
  return true;
}

/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
  return true;
}

/* 
Output: 
// break the customers into age demographic blocks. 
// For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20: 38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
  return true;
}

/* 
Output: 
// break the customers into age blocks. 
// For example, this lists out every cool factor for users aged between 1 and 10, then every cool factor for users aged between 21 and 30, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
  return true;
}

/* 
Output: 
// break the customers into age demographic blocks, and give the average cool factor for every age block. 
// For example, below, the average cool factor for users aged between 31-40 is 9.5.

{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
  return true;
}
