const checkIfEmailValid = (value: string) => true;
const checkIfNotEmpty = (value: string) => !!value && value.trim().length > 0;
const checkIfArrayNotEmpty = (value: any[]) => !!value && value instanceof Array && value.length > 0;

export {
    checkIfEmailValid,
    checkIfNotEmpty,
    checkIfArrayNotEmpty
}
