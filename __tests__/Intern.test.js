const Intern = require("../lib/Intern");

test("can we get the school.", () => {
    const schoolTest = "JeremyBukofzer"
    const employeeAction = new Intern("jeremy", 123456, "jlbukofzer@gmail.com", schoolTest);
    expect(employeeAction.getSchool()).toBe(schoolTest);
})