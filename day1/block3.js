const scores = [10, 20, 30, 40];

for (const score of scores) {
  if (score > 20) {
    console.log(`High score: ${score}`);
  }
}

scores.forEach((score) => {
  console.log(score * 2);
});

let total = 0;
while (total < 100) {
  total += 20;
  console.log(total);
}
