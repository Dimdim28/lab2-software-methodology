# lab2_software-methodology

## Description

* First variant of of application implements a default circular linked list. This is one of the oldest and popular data structures.

* Second variand of the application implements a linked list based on build-in arrays. This implementation is slower then circular linked list.

## Variant calculation
Defining variant formula: number of the gradebook % 4
```
My variant = 1320 % 4 = 0
```

## Instruction
The project requires node.js to be installed on your machine. I was working with 18.12.1 version.

Install all dependancies:
```bash
$ npm install
```

To run application:
```bash
$ npm start
```

To run tests:
```bash
$ npm test
```

## Reference to the commit the failed CI tests
[Failed commit](https://github.com/Dimdim28/lab2-software-methodology/commit/320f1117ab9581f2eda4fa3b38ff90bff7650528)

## Conclusion

Unit tests helped me find errors at the development stage of the second version of the application and leave the same interface for the list as before. Tests are very useful in commercial projects because every broken part of the application equals lost money. They are needed to make a reliable program that is not easy to break and whose code can be changed if necessary so that the program continues to work.