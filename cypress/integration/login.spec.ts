import {Accounts} from "../common/Accounts";

describe('I can successfully login to Direct', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it("Login with an existing user", function() {
        Accounts.printMessageToCy("Hello, do this work");
        Accounts.printMessageToCy("I think it does");
    });

    it("Unsuccessful login using invalid email", function (){
        Accounts.failedLogin('bad.email.com', 'testPassword123!', 'Unknown username')
    })
})
