const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const checkIfExists = (item) => !!item;
const checkIfNotEmpty = (item) => checkIfExists(item) && (item?.trim()?.length ?? 0) > 0;
const checkIfEmailValid = (item) => checkIfNotEmpty(item) &&  emailRegex.test(item);

export {
    checkIfExists,
    checkIfNotEmpty,
    checkIfEmailValid
}
