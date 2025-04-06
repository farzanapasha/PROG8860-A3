const { app } = require('@azure/functions');

const helloWorldHandler = async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.name || await request.text() || 'world'; // directly access request.query.name

    return { body: `Hello, ${name}!` };
};

// Register the handler with Azure Functions
app.http('HelloWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: helloWorldHandler
});

// Export the handler for testing
module.exports = helloWorldHandler;


//const { app } = require('@azure/functions');
//
//app.http('HelloWorld', {
//    methods: ['GET', 'POST'],
//    authLevel: 'anonymous',
//    handler: async (request, context) => {
//        context.log(`Http function processed request for url "${request.url}"`);
//
//        const name = request.query.get('name') || await request.text() || 'world';
//
//        return { body: `Hello, ${name}!` };
//    }
//});
