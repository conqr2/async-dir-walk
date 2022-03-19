# async-dir-walk
Walks through a directory and all subdirectories (including nested) asynchronously and returns a Promise that resolves to an array of file paths. **With no dependencies.**

## Usage

### Installing
`npm i async-dir-walk -P`

### Importing
```js
const walk = require("async-dir-walk");
```

### Usage Example

#### Filestructure:
```
./
├── test/
│   ├── file1.js
│   ├── file2.js
│   ├── file3.js
│   └── folder1
│       ├── folder1File1.js
│       ├── folder1File3.js
│       ├── folder1File2.js
│       └── folder 2
│           ├── folder2File1.js
│           └── folder 3
│               └── folder 4
│                   └── folder 5
│                       └── folder 6
│                           └── folder6File1.js
├── index.js
└── package.json
```

#### `index.js`:
```js
const walk = require("dirwalk");

walk("./test")
  .then(results => console.log("`Test` directory contents: %s", results.join(", "))
  .catch(error => console.error("Error walking directory `Test`: ", error);
```

## API
`walk(dir)`
Walks the provided directory and traverses through all subdirectories (including those nested), collecting file names in a parallel fashion. Returns a Promise that resolves to an array of file paths.
