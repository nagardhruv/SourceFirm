const MOCKDATA = {
    email: "mock.user@trootech.com",
};

const validation = (email) => {
    if (email === MOCKDATA.email) return true;
    return false;
};

describe("User Validation", () => {
    test("Email id correct", () => {
        expect(validation(MOCKDATA.email)).toBe(true);
    });

    test("Email id incorrect", () => {
        expect(validation("user@gmail.com")).toBe(false);
    });

    test("Email is required", () => {
        expect(validation()).toBe(false);
    });
});