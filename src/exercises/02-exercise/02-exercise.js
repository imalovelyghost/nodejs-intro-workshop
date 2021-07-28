/**
 * 1. Use the `path.resolve` method to build the path
 *    of the file named "names.txt" in the current folder
 *
 *    The file has an initial contents of: ana;alex;dani;alex;smith
 *
 * 2. Complete the `uppercase` function so that:
 *
 *    2.1 it reads the contents of the `names.txt` file
 *
 *    2.2 upper cases each name in the string
 *        @hint use .split() and .join()
 *
 *    2.3 joins back the result in a single string concatenated
 *        with a ; character between each name
 *
 *    2.4 writes the resulting string in the initial file
 *        such that it overwrites the contents
 *
 *    2.5 calls the `callback` parameter of the `uppercase` function
 *        with the resulting string with all the names in upper case
 *        only after writing the contents to the disk.
 */
 const path = require("path");
 const fs = require("fs");
 
 const FILE_PATH = path.resolve(__dirname, "names.txt");
 
 function uppercase(callback) {
   fs.readFile(FILE_PATH, { encoding: "utf-8" }, (err, data) => {
     if (err) throw err;
 
     data = data.split(";");
     data = data.map((d) => d.toUpperCase()).join(";");
 
     fs.writeFile(FILE_PATH, data, { encoding: "utf-8" }, (writeErr) => {
       if (writeErr) throw writeErr;
       callback(data);
     });
   });
 }
 
 /**
  * 3. Export the `uppercase` function as a named export
  *
  * @hint
  * { a: a }
  */
 module.exports = { uppercase: uppercase };
