// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers = [...drivers, name];
  return newDrivers
}

function prependDriver(name) {
  newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver() {
  drivers2 = drivers.slice(2);
  return drivers2;
}
