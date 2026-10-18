// User.js
export class User {
    constructor({ id, name, role, token }) {
        this.id = id;
        this.name = name;
        this.role = role; // 'cashier' | 'manager'
        this.token = token;
    }

    isManager() {
        return this.role === 'manager';
    }

    isCashier() {
        return this.role === 'cashier';
    }
}