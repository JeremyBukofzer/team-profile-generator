const Engineer = require("../lib/Engineer");

test("can we get the github.", () => {
    const githubTest = "JeremyBukofzer"
    const employeeAction = new Engineer("jeremy", 123456, "jlbukofzer@gmail.com", githubTest);
    expect(employeeAction.getGithub()).toBe(githubTest);
})