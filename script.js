

let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
}
);
let AppID = "89bb664a7d9348a1820df17d708bae53";
let token = "00689bb664a7d9348a1820df17d708bae53IAD4KixtP7mhORpkXxNEohELqbn0FLEVUk75CWsaaHw8iXpejJEAAAAAEADnfDPKb4I4YgEAAQBqgjhi";
let channel = "ere";
client.init(AppID);
client.join(token,
    channel, null, (uid)=>{
    let localStream = AgoraRTC.createStream({
        audio: true,
        video: true,
        
    }
);
    localStream.init(()=>{
        mystream = localStream;
        localStream.play("hosty");
        client.publish(localStream);
    });
});



document.getElementById("insert").innerHTML = "appid: " + AppID  + " channel: " + channel + "<br>" + "token: "+ token;



client.on("stream-added", function (evt){
    client.subscribe(evt.stream);
}); 

client.on("stream-subscribed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    let user = document.getElementById("usero");
    let div = document.createElement("div");
    div.id = streamId;
    user.appendChild(div);
    stream.play(streamId);
});

let audio = false;
let mystream;
let video = false;

let vdchkin = document.getElementById("vdchkin");
vdchkin.addEventListener('change',function listp(){
    if (vdchkin.checked) {
        mystream.disableVideo();
            
    } else {
        mystream.enableVideo();
    }
})
let adchkin = document.getElementById("adchkin");
adchkin.addEventListener('change',function lista(){
    if (adchkin.checked) {
        mystream.muteAudio();
            
    } else {
        mystream.unmuteAudio();
    }
}
)
let scchkin = document.getElementById("scchkin");
scchkin.addEventListener('change',function listsc(){
    if (scchkin.checked) {
        window.open("indexShare.html");
            
    }
}
)

