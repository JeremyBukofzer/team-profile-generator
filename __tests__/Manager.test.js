const Manager = require("../lib/Manager");

test("can we get the school.", () => {
    const officeNumTest = "JeremyBukofzer"
    const employeeAction = new Manager("jeremy", 123456, "jlbukofzer@gmail.com", officeNumTest);
    expect(employeeAction.getOfficeNumber()).toBe(officeNumTest);
})