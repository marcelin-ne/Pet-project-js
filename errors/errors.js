//Factory to create Errors

const createErrorFactory = function (name) {
  return class CustomizedError extends Error {
    constructor(message) {
      super(message);
      this.name = name;
    }
  };
};

export const ConnectionError = createErrorFactory("ConnectionError");
export const ValidationError = createErrorFactory("ValidationError");

// Create Individual Class Errors

//s ValidationError extends Error {
//     constructor (message){
//         super(message)
//         this.name='ValidationError'
//     }
// }

// class connectionError extends Error {
//     constructor (message){
//         super(message)
//         this.name='ConnectionError'
//     }
// }
