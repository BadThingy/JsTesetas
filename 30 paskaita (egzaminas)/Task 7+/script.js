/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
let showObjectKeys = (masina) => {
  let objectKeys = [];

  objectKeys.push(masina);
  return objectKeys;
}

console.log(showObjectKeys(audi));