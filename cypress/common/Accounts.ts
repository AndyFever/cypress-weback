import * as Cypress from "cypress";

interface Account {
    email: string;
    password: string;
    firstName: string;
    lastName: string
}

export class Accounts {
    urlLogin: string;
    urlRegister: string;

    constructor() {
        this.urlLogin = '/login';
        this.urlRegister = '/create-new-user';
    }

    /**
     * Creates a new account.  Faker commented out as it gives issues
     */
    static createNewAccount(): Account {

        const email = "Andy@gmail.com"//faker.internet.email();
        const firstName = "Andy" //${faker.name.firstName()}`;
        const lastName = "Fever"//`${faker.name.lastName()}`;
        const password = "testPassword123!" //faker.internet.password();
        const person = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        };

        return person;

    }

    /**
     * Returns a message to the cypress command log.  Used as an example
     * @param msg
     */
    static printMessageToCy(msg: string){
        cy.log(`Here is the message: ${msg}`)
    }

    /**
     * Logs into a Direct using parameters passed in.
     *
     * No validation is done on the landing page as it depends on the linked components
     * @param email
     * @param password
     */
    static enterExistingCredentials(email: string, password: string): void {
        this.__login(email, password);
    }

    static failedLogin(email: string, password: string, failureMsg: string): void {
        this.__login(email, password);
        cy.getBySel('failureMsg')
            .should('include.text', failureMsg);
    }

    static enterCredentials(account: Account): void {

        // cy.get('[data-cy="loginForm"').matchImageSnapshot('User login form');
        cy.get('[data-cy=`email`]')
            .clear()
            .type(account.email);
        cy.get('[data-cy=`password`]')
            .clear()
            .type(account.password);
        cy.get('[data-cy=`submit`]')
            .click();
    }

    static createUser(firstName: string, lastName: string, email: string, password: string): void {

        // cy.get('[data-cy="userDetails"').matchImageSnapshot('User registration form');
        cy.get('[data-cy=`lastName`]')
            .clear()
            .type(lastName);
        cy.get('[data-cy=`firstname`]')
            .clear()
            .type(firstName);
        cy.get('[data-cy=`emailAddress`]')
            .clear()
            .type(email);
        cy.get('[data-cy=`password1`]')
            .clear()
            .type(password);
        cy.get('[data-cy=`password2`]')
            .clear()
            .type(password);
        cy.get('data-cy=[termsAndConditions]')
            .click();
        cy.get('[data-cy=`submit`]')
            .click();
    }

    static __login (email: string, password: string) {
        cy.get('[data-cy=`email`]')
            .clear()
            .type(email);
        cy.get('[data-cy=`password`]')
            .clear()
            .type(password);
        cy.get('[data-cy=`submit`]')
            .click();
    }
}
