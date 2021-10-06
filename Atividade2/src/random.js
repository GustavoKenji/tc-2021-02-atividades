function generateRandomNumber(start, end) {
  if (start < 0 || end < 0) {
    return -1;
  }

  if (start >= end) {
    return -1;
  }

  min = Math.ceil(start);
	max = Math.floor(end);
  return random = Math.floor(Math.random() * (max - min)) + min;
}

module.exports = generateRandomNumber;