const Employee = require("../lib/Employee");

test("Will it create a new employee.", () => {
    const employeeAction = new Employee();
    expect(typeof(employeeAction)).toBe("object");
})

test("Tests employee name.", () => {
    const name = "Jeremy";
    const employeeAction = new Employee(name);
    expect(employeeAction.name).toBe(name);
})

test("Tests employee ID", () => {
    const id = 123456;
    const employeeAction = new Employee("Jeremy", id);
    expect(employeeAction.id).toBe(id);
})

test("Tests employee Email.", () => {
    const email = "jlbukofzer@gmail.com";
    const employeeAction = new Employee("Jeremy", 123456, email);
    expect(employeeAction.email).toBe(email);
})

test("Tests the getRole function.", () => {
    const returnData = "Employee";
    const employeeAction = new Employee();
    expect(employeeAction.getRole()).toBe(returnData);
})