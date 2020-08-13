const notification = require('./notification.js');

 
const getDirectionName = shortCode => {
  switch (shortCode) {
    case 'N':
      return 'NORTH';
    case 'S':
      return 'SOUTH';
    case 'E':
      return 'EAST';
    case 'W':
      return 'WEST';
  }
};

 
const getNewDirection = (currentDirection, command) => {
  const directions = ['N', 'E', 'S', 'W'];
  let currentDirectionIndex = directions.indexOf(currentDirection);

  switch (command) {
    case 'LEFT':
      currentDirectionIndex--;
      break;
    case 'RIGHT':
      currentDirectionIndex++;
      break;
  }

  if (currentDirectionIndex < 0) return 'W';
  if (currentDirectionIndex > 3) return 'N';

  return directions[currentDirectionIndex];
};

 
const getNewCoordinate = (currentCoordinate, currentDirection) => {
  switch (currentDirection) {
    case 'N':
      currentCoordinate[1] = parseInt((parseInt(currentCoordinate[1]) + 1).toString());
      return currentCoordinate;
    case 'S':
      currentCoordinate[1] = parseInt((parseInt(currentCoordinate[1]) - 1).toString());
      return currentCoordinate;
    case 'W':
      currentCoordinate[0] = parseInt((parseInt(currentCoordinate[0]) - 1).toString());
      return currentCoordinate;
    case 'E':
      currentCoordinate[0] = parseInt((parseInt(currentCoordinate[0]) + 1).toString());
      return currentCoordinate;
  }
};

 
const isValidCoordinate = coordinate => {
  const testX = parseInt(coordinate[0]) >= 0 && parseInt(coordinate[0]) < 5;
  const testY = parseInt(coordinate[1]) >= 0 && parseInt(coordinate[1]) < 5;
  if ((!testX || !testY) && process.env.NODE_ENV !== 'test') {
    notification.error(`You cannot place at the coordinate of [${coordinate[0]},${coordinate[1]}] as it will make your robot falls off, please change direction or key in another coordinate`);
  }
  return testX && testY;
};

 
const isValidDirection = direction => {
  const result = ['N', 'S', 'E', 'W'].indexOf(direction) !== -1;
  if (!result && process.env.NODE_ENV !== 'test') {
    notification.error(`Please key in one of the valid directions: N, S, E, W`);
  }
  return result;
};

module.exports = { getDirectionName, getNewDirection, getNewCoordinate, isValidCoordinate, isValidDirection };
