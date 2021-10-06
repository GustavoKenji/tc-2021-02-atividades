function generateRandomNumber(start, end) {
  if (start < 0 || end < 0) {
    return -1;
  }

  if (start >= end) {
    return -1;
  }

  let diff = end - start + 1;
  let random = Math.random() * diff;

  return start + random;
}
