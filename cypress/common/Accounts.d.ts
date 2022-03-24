
declare namespace Accounts {

    /**
     *  Returns an new fake account that can be used for logging in
     *  @example let user = createNewAccount()
     */
    export interface createNewAccount {}
    
    /**
     *  Allows test to enter credetials for an existing user in the dtabase
     *  @example enterExistingCredentials('andy', 'testpPassword123!')
     */
    export interface enterExistingCredentials {}

    /**
     *  Login to the application through the accounts service
     *  @example enterCredentials(newUser: Account)
     */
    export interface enterCredentials {}

    /**
     * Complete the registration form for the application
     * @example createUser('Jones', 'Tom', 'tom.jones@gmail.com', 'testPassword1231'
     */
    export interface createUser {}
}
