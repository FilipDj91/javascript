var i = 3;

while (i < 20) {
  i++;
  if (i % 9 === 0) {
    continue;
  }
  console.log(i);
}
