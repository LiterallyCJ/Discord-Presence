const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

const config = require("./configs/config.json");
let setActivityLoop;

const template = {
    buttons: [],
    details: null,
    state: null,
    largeImageKey: null,
    largeImageText: null,
    smallImageKey: null,
    smallImageText: null,

    instance: false,    
}
let request = {};

const updateRequest = _ => {
    let presence = require("./configs/presence.json");

    for (let [key, _] of Object.entries(template)) {
        let newVal = presence[key];

        if (newVal.toString().length <= 0) return;
        request[key] = newVal;
    } 
}

const setActivity = _ => {
    updateRequest();
    client.setActivity(request);
    console.log(`New request: \n${JSON.stringify(request)}`);
};

client.on('ready', () => {
    console.log("Ready!");
    setActivity();

    if (!config.liveUpdate) return;
    setActivityLoop = setInterval(setActivity(), 15e3);
});

client.login({
    clientId: config.clientID, 
    clientSecret: config.clientSecret 
});