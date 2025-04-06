const { expect } = require('chai');
const helloWorldHandler = require('../src/functions/HelloWorld');  // Now importing the handler directly

describe('Azure Function Tests', () => {
    it('should return "Hello Farzana" when name=Farzana is passed', async () => {
        const context = {
            log: console.log,
            res: {}
        };
        const req = { query: { name: 'Farzana' }, text: () => '' };  // Simulating query with 'name'

        // Call the function handler directly
        const result = await helloWorldHandler(req, context);

        expect(result.body).to.equal('Hello, Farzana!');
    });

    it('should return "Hello world" when no name is passed', async () => {
        const context = {
            log: console.log,
            res: {}
        };
        const req = { query: {}, text: () => '' };  // Simulating empty query

        // Call the function handler directly
        const result = await helloWorldHandler(req, context);

        expect(result.body).to.equal('Hello, world!');
    });
});

