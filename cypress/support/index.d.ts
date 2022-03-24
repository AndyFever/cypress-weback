declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @param cypress data cy
         * @example cy.dataCy('greeting')
         */
        getBySel(value: string): Chainable<Element>

        /**
         * Custom command to select DOM element by data-cy attributea with defined start and ends.
         * @example cy.dataCy('selectorStart, selectorEnd')
         */
        selectMultipleCy(endSelector: string, startSelector: any): Chainable<Element>
    }
}
