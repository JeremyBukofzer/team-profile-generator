import Employee from "./Employee";

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum= officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }
}

export default Manager;