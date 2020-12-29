function validateCategory(category) {
    const re = /^[а-яa-z]+$/i;
    return re.test(String(category).toLowerCase());
}

export const validateControl = (value, validation) => {
    if(!validation) {
        return true;
    }

    let isValid = true

    if(validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    if(validation.category) {
        isValid = validateCategory(value) && isValid
    }
    return isValid
}