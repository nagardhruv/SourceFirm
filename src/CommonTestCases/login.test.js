const MOCKDATA = {
    email: "mock.user@trootech.com",
    password: "Test@123",
};

const validation = (email, password) => {
    if (email === MOCKDATA.email && password === MOCKDATA.password) return true;
    return false;
};

describe("User Validation", () => {
    test("User data is correct", () => {
        expect(validation(MOCKDATA.email, MOCKDATA.password)).toBe(true);
    });

    test("Email is required", () => {
        expect(validation(MOCKDATA.email)).toBe(false);
    });

    test("Password is required", () => {
        expect(validation(MOCKDATA.email)).toBe(false);
    });

    test("Incorrect email", () => {
        expect(validation(MOCKDATA.email, "user123")).toBe(false);
    });

    test("Incorrect password", () => {
        expect(validation("user@gmail.com", MOCKDATA.password)).toBe(false);
    });
});