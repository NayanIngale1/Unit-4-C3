const app = require('./indexx');



const connect = require('./configs/db')
app.listen(9000, async () => {
    try {
        await connect();
        console.log("listening on port 9000");
    } catch (error) {
        console.log('error:', error)
        
    }
})