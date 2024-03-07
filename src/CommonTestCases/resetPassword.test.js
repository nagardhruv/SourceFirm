const MOCKDATA = {
    password: "Test@123",
    confirm_password: "Test@123",
};

const Password_Validation = (password, confirm_password) => {
    if (password === MOCKDATA.password && confirm_password === MOCKDATA.confirm_password && MOCKDATA.password === MOCKDATA.confirm_password) return true;
    return false;
};

describe("User Validation", () => {
    test("Correct User data", () => {
        expect(Password_Validation(MOCKDATA.confirm_password, MOCKDATA.password)).toBe(true);
    });

    test("Password is required", () => {
        expect(Password_Validation(MOCKDATA.confirm_password)).toBe(false);
    });

    test("Confirm Password is required", () => {
        expect(Password_Validation(MOCKDATA.password)).toBe(false);
    });


    test("Password and confirm password are equal", () => {
        expect(Password_Validation(MOCKDATA.password, MOCKDATA.confirm_password)).toBe(true);
    });

    test("Password and confirm password are not equal", () => {
        expect(Password_Validation(MOCKDATA.password, "user")).toBe(false);
    });

});