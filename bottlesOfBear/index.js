let i = 99;
while (i >= 0) {
  if (i === 1) {
    console.log(`${i} Bottles of bear on the wall, ${i} bottle of bear.`);
    console.log(
      `Take one down and pass it round, no more bottles of bear on the wall.`
    );
  } else if (i === 0) {
    console.log(
      `No more bottles of bear on the wall, no more bottles of bear on the wall`
    );
    console.log(
      `Go to the store and buy some more, 99 bottles of bear on the wall.`
    );
  } else {
    console.log(`${i} Bottles of bear on the wall, ${i} bottle of bear.`);
    console.log(
      `Take one down and pass it round, ${i - 1} bottles of bear on the wall.`
    );
  }

  i--;
}
