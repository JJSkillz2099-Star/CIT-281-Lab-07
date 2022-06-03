class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'Custom Error';
    }
}

function throwGenericError() {
    throw new Error('Generic Error');
}

function throwCustomError() {
    throw new CustomError('Custom Error');
}

try {
    console.log('Force generic error');
    console.log('Generic error try block');
    throwGenericError();
} catch (err) {
    console.log('Generic error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log('Generic error finally block');
}

try {
    console.log('Force custom error');
    console.log('Custom error try block');
    throwCustomError();
} catch (err) {
    console.log('Custom error catch block');
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log('Custom error finally block');
}
 