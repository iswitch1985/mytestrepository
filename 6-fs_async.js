//declare only readFile and writeFile functions from fs module
const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./folder/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./folder/result_async.txt",
      `the async result: ${first},${second} `,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});
