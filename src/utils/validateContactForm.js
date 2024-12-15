export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if(values.firstName.length < 2) {
        errors.firstName = "Must be atleast 2 characters.";
    } else if(values.firstName.length > 15) {
        errors.firstName= "Must be 15 characters or less."
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if(values.lastName.length < 2) {
        errors.lastName = "Must be atleast 2 characters.";
    } else if(values.lastName.length > 15) {
        errors.lastName= "Must be 15 characters or less.";
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum = "The phone number should contain only numbers.";
    }else if(values.phoneNum.length > 10) {
        errors.phoneNum = "The phone number should be atleast ten numbers.";
    }

    if(!values.email.includes("@")) {
        errors.email = "Email should contain @";
    }

    return errors;
}