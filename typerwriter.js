const sentence = "hello there from lighthouse labs";
let time = 0
for (const char of sentence) {
  time = time + 50;
  setTimeout(() => {process.stdout.write(char)},time);
  
 // <= 1s delay to make it noticeable. Can dial it down later.
  
}