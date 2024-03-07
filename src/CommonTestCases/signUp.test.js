const MOCKDATA = {
    first_name: "Mock",
    last_name: "User",
    email: "mock.user@trootech.com",
    phone_number: "1234567890",
    password: "Test@123",
    confirm_password: "Test@123",
    termsAndConditions: true,
    CaptchaCode: "DIcaK",
    country: "India",
    city: "Ahmedabad",
};

const Mock_CaptchaCode = {
    Captcha_Code: "DIcaK",
}

const validation = (first_name, last_name, email, phone_number, password, confirm_password, termsAndConditions, CaptchaCode, country, city) => {
    if (first_name === MOCKDATA.first_name && last_name === MOCKDATA.last_name && email === MOCKDATA.email && phone_number === MOCKDATA.phone_number && confirm_password === MOCKDATA.confirm_password && password === MOCKDATA.password && termsAndConditions === MOCKDATA.termsAndConditions && CaptchaCode === MOCKDATA.CaptchaCode && country === MOCKDATA.country && city === MOCKDATA.city) return true;
    return false;
};

const Password_Validation = (password, confirm_password) => {
    if (password === MOCKDATA.password && confirm_password === MOCKDATA.confirm_password && MOCKDATA.password === MOCKDATA.confirm_password) return true;
    return false;
};

const CaptchaCode_validation = (CaptchaCode, Captcha_Code) => {
    if (CaptchaCode === MOCKDATA.CaptchaCode && Captcha_Code === Mock_CaptchaCode.Captcha_Code && MOCKDATA.CaptchaCode === Mock_CaptchaCode.Captcha_Code) return true;
    return false;
};

describe("User Validation", () => {
    test("Correct User data", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.confirm_password, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(true);
    });

    test("First name is required", () => {
        expect(validation(MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.confirm_password, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Last name is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.confirm_password, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Email is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.phone_number, MOCKDATA.confirm_password, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Phone number is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.confirm_password, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Password is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.confirm_password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Confirm Password is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Terms and conditions required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.password, MOCKDATA.confirm_password, MOCKDATA.CaptchaCode, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Captch code is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.password, MOCKDATA.confirm_password, MOCKDATA.termsAndConditions, MOCKDATA.country, MOCKDATA.city)).toBe(false);
    });

    test("Country is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.password, MOCKDATA.confirm_password, MOCKDATA.termsAndConditions, MOCKDATA.CaptchaCode, MOCKDATA.city)).toBe(false);
    });

    test("City code is required", () => {
        expect(validation(MOCKDATA.first_name, MOCKDATA.last_name, MOCKDATA.email, MOCKDATA.phone_number, MOCKDATA.password, MOCKDATA.confirm_password, MOCKDATA.termsAndConditions, MOCKDATA.country, MOCKDATA.CaptchaCode)).toBe(false);
    });

    test("Password and confirm password are equal", () => {
        expect(Password_Validation(MOCKDATA.password, MOCKDATA.confirm_password)).toBe(true);
    });

    test("Password and confirm password are not equal", () => {
        expect(Password_Validation(MOCKDATA.password, "user")).toBe(false);
    });

    test("Incorrect captcha code", () => {
        expect(CaptchaCode_validation(Mock_CaptchaCode.Captcha_Code, "25HmkL")).toBe(false);
    });

    test("Correct captcha code", () => {
        expect(CaptchaCode_validation(Mock_CaptchaCode.Captcha_Code, MOCKDATA.CaptchaCode)).toBe(true);
    });
});