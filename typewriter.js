const sentence = "hello there from lighthouse labs";
let current = 0;
let incrim = 50;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char)}, current)
  current += incrim;
};
setTimeout(() => {
  process.stdout.write('\n')}, current);