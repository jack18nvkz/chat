const websocketServer = require('ws').Server;
const port = 9090;
const wss = new websocketServer({port: port});
const users = {};

console.log(`Server is running on port ${port}`);

function sendTo(connection, message){
    connection.send(JSON.stringify(message));
}

wss.on('connection', connection => {
    console.log('user connected');

    connection.on('message', message => {
        let data;

        try{
            data = JSON.parse(data);
        }catch (e){
            console.log("Invalid JSON");
            data ={};
        }

        switch (data.type){
            case 'login':
                console.log('user logged:', data.name);

                if (users[data.name]){
                    sendTo(connection, {
                        type: 'login',
                        success: false
                    });
                } else {
                    users[data.name] = connection;
                    connection.name = data.name;

                    sendTo(connection, {
                        type: 'login',
                        success: true
                    });
                }
        }
    });

    connection.send("Hello from server");
})

