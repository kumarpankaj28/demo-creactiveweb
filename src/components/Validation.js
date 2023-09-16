
export const Validation = (values) => {

    const errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.name === "") {
        errors.name = "Name is Required!";
    }
    if (values.email === "") {
        errors.name = "Name is Required!";

    } else if (!email_pattern.test(values.email)){
        errors.email = "Email did not match";
    }
    if (values.number === "") {
        errors.name = "Number is Required!";
    }
    if (values.message === "") {
        errors.name = "Message is Required!";
    }
    if (values.captcha === "") {
        errors.name = "Captcha is Required!";
    }
    return errors;

}
