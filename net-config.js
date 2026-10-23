/* Seed City online settings, shared by Neon Cycles, Neon Sumo and the Seed City Arcade.

   Players connect to each other directly (WebRTC). When a network blocks that (mobile data,
   school or work Wi-Fi), the connection falls back to a relay server (TURN). The free
   shared PeerJS relay below is often busy and only uses port 3478, which many of those
   networks block, so joining fails there some of the time.

   To fix that for good, add your own free relay: sign up at https://www.expressturn.com
   (free tier: 1 TB a month), copy the username and password from its dashboard into
   MY_TURN below, and push. The 'turns:...:443' entry gets through almost any network
   because it looks like normal secure web traffic.

   These credentials end up in a public page, which is normal for a hobby game; the worst
   case is someone else using some of your free relay allowance. */
(() => {
  const MY_TURN = null;
  // const MY_TURN = {
  //   urls: ['turn:relay1.expressturn.com:3478?transport=udp',
  //          'turn:relay1.expressturn.com:3478?transport=tcp',
  //          'turns:relay1.expressturn.com:443?transport=tcp'],
  //   username: 'YOUR_EXPRESSTURN_USERNAME',
  //   credential: 'YOUR_EXPRESSTURN_PASSWORD'
  // };

  window.SEEDCITY_ICE_SERVERS = [
    {urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302']},
    ...(MY_TURN ? [MY_TURN] : []),
    // PeerJS's free shared relay (what the games used before); kept as a backup
    {urls: ['turn:eu-0.turn.peerjs.com:3478', 'turn:us-0.turn.peerjs.com:3478'], username: 'peerjs', credential: 'peerjsp'},
  ];
})();
