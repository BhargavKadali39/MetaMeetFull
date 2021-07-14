


let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

client.init("89bb664a7d9348a1820df17d708bae53");
client.join("00689bb664a7d9348a1820df17d708bae53IABag443WKg1+Ew8Q4Ke9n4DwK/SwN3esh+Tb4jQ/z+TNoZuzlEAAAAAEADQXSp/RxbvYAEAAQBDFu9g",
 "hero", null, (uid)=>{
    let localStream = AgoraRTC.createStream({
        audio: true,
        video: true,
    });
    localStream.init(()=>{
        mystream = localStream;
        localStream.play("hosty");
        client.publish(localStream);
    });});

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
})
    // function screensh(){
    //         AgoraRTC.createScreenVideoTrack({
    //             encoderConfig: "1080p_1",
    //         }, "enable").then([screenVideoTrack, screenAudioTrack] => {
    //             /** ... **/
    //         });
    // }