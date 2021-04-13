const fs = require("fs");
const path = require("path");

const walk = dir =>
  new Promise((resolve, reject) => {
    var results = [];

    fs.readdir(dir, (err, list) => {
      if (err) return reject(err);
      var pending = list.length;
      if (!pending) return resolve(results);
      list.forEach(file => {
        file = path.resolve(dir, file);
        fs.stat(file, async (err, stat) => {
          if (err) reject(err);
          if (stat && stat.isDirectory()) {
            const res = await walk(file);

            results = results.concat(res);
            if (!--pending) resolve(results);
          } else {
            results.push(file);
            if (!--pending) resolve(results);
          }
        });
      });
    });
  });

module.exports = walk;
