# Seed City

An endless, procedurally generated city that grows from a single number. Every tower, lit window, car, neon sign and searchlight is computed from the seed as you fly. Nothing is stored or downloaded except the three.js library.

## Play it

| Page | What it is |
| --- | --- |
| `index.html` | **VR build.** Open it in the Meta Quest browser and press **Enter VR**. Also runs as a flat preview on any computer. |
| `cycles/` | **Neon Cycles**, a separate light-cycle arena game (solo against bots, or online with room codes). |
| `arcade/` | **Seed City Arcade**, a party lobby: friends join one code, the host picks a game, and everyone moves between Neon Cycles and Neon Sumo together. |
| `sumo/` | **Neon Sumo**, bumper sumo on a shrinking neon platform (solo against bots, or online with room codes). |
| `desktop.html` | **Full desktop build.** HDR bloom, rain with wet-street reflections, car reflections, chase and cockpit views. |

Once GitHub Pages is on, the links are:

- Neon Cycles: `https://bootleg714.github.io/seed-city/cycles/`
- Neon Sumo: `https://bootleg714.github.io/seed-city/sumo/`
- Arcade: `https://bootleg714.github.io/seed-city/arcade/`

- VR: `https://bootleg714.github.io/seed-city/`
- Desktop: `https://bootleg714.github.io/seed-city/desktop.html`

## Game modes

A menu floats over the live city when you start (in VR, point a controller at it and pull the trigger; on a flat screen, click).

- **Free Flight:** fly anywhere.
- **Races:** each seed grows three checkpoint courses that follow the streets. Fly through the rings in order: the next ring is amber, the one after is cyan, and the green ring is the finish. A floating arrow points the way, a 3-2-1 countdown starts you off, and your best time for each course is saved on the device (per seed).
- **Courier:** a delivery shift on a clock. Fly to the cyan light column, slow down over the rooftop pad and hold steady to load the package, then race it to the amber column. Faster deliveries pay more credits, every delivery adds 12 seconds to your shift, and bumping buildings with cargo aboard costs you. Your best shift per seed is saved.
- **Combat:** waves of interceptor drones circle you, climb over buildings and fire red bolts that lead your movement (buildings block them). Your shield drops with each hit and recharges after a few seconds out of fire; at zero you're shot down. Each wave adds drones that are faster and shoot more often; clearing one scores a bonus and restores some shield. Your lasers get a slight aim assist, the red arrow points to the nearest drone, and your best score per seed is saved.
- **Dogfight (desktop, online):** fly against friends. One pilot picks **Host a room** and shares the four-letter code; the others type it in and pick **Join a room** (or open `desktop.html#room=CODE`). Everyone flies in the host's city, up to 6 pilots. Lasers chip away at shields, a red arrow points to the nearest pilot, and you respawn three seconds after being shot down. It is peer to peer through the free PeerJS service, so there is no server to run; some strict networks (some workplaces, schools or mobile hotspots) block direct connections.

## Seed City Arcade

A party lobby for playing the games together. One player picks **Start a party** and shares the code or invite link; friends join. The host picks a game and everyone goes there together, already in the same room: the host re-opens the same code inside the game, and everyone else joins it automatically (retrying for a few seconds while it opens). In the game's lobby, the host's **Back to arcade** button brings the whole room back to the party to pick the next game. The arcade uses PeerJS ids `seedarcade-<CODE>`; the games also accept `#host=CODE&arcade` and `#room=CODE&arcade&wait` links for this hand-off.

## Neon Sumo

Roll your ball into the others and knock them off the platform. The platform starts shrinking 6 seconds into each round, and a sudden-death shrink ends any round that drags on. Last ball on the platform takes the round; first to 3 wins. Knock someone off within 3 seconds of hitting them and you get the knockout: it shows in the feed (top right) and in the KO column on the scoreboard, and the match ends with the most knockouts called out. The fall that decides each round plays in slow motion with the camera zoomed in.

Three arenas: **Classic** (a plain disc), **Donut** (a hole in the middle you can fall through) and **Bumpers** (four posts that kick you away hard; bank someone off one and the knockout is still yours, and the posts sink once the shrinking edge reaches them). Pick one from the Arena button on the menu or in the lobby, or leave it on **Mixed** to play them in turn, one per round. The host's pick applies to everyone in the room.

Power-ups: one glowing pickup appears near the middle 5 seconds into a round, and a new one 8 seconds after each is taken. Roll through it to grab it. **Heavy** (violet cube) makes you three times the weight for 5 seconds. **Shockwave** (cyan ring) blasts everyone near you outward, and any knockouts it causes are yours. **Grip** (lime crystal) lets you stop and steer hard for 5 seconds. Your active power-up and its time left show above the dash bar, and a ring around your ball flashes when it is about to run out.

- **Keyboard:** WASD or arrows to roll, Space (or Shift) to dash, M for sound, Esc twice to leave
- **Touch:** drag on the left side to roll, DASH button bottom right
- **Controller:** left stick rolls, A or RT dashes, Start leaves

Online works like Neon Cycles: host a room, share the four-letter code or the invite link (`sumo/#room=CODE`), and the host can add bots. Up to 6 players. Because balls push each other, the host runs the physics for everyone; joiners send only their stick and dash, and predict their own ball so controls feel instant. Peer to peer through PeerJS, with ids `neonsumo-<CODE>`.

## Music

The soundtrack is composed live from the seed: each city gets its own minor key, chord progression and tempo, with slow detuned synth pads, a soft bass and bell notes in a big reverb. During Races and Courier a driving layer (arpeggio, soft kick, hi-hats) fades in. Set the level with the **Music volume** slider in the controls panel (default 60%). In VR, the **Music** menu item steps through High, Medium, Low and Off. **M** toggles it on desktop, it follows the Sound on/off button, and your level is remembered.

## 3D sound

Sound is positional (HRTF), so it comes from where things are and follows your head in VR (use headphones on desktop). The nearest cars swoosh past with doppler pitch, lasers fire from the left and right guns, explosions come from where they happen, combat drones hum from their own positions, near-miss enemy bolts zip past your head, sirens occasionally wail by out in the city, and in the cockpit rain drums on the roof above you.

## VR controls (Quest)

- **Left stick:** fly forward, back and sideways
- **Left trigger:** boost
- **Right stick:** left/right turns smoothly, up/down climbs and dives
- **Right trigger:** fire lasers straight ahead (aim with the ring in front of the car)
- **A:** cycle time of day
- **B:** back to the menu (grow a new city from the menu)
- **X:** light beams on/off
- **Y:** switch view: interior cockpit (dashboard with speed, altitude, compass), third-person chase, or float (no car, just you drifting through the city)

Hold the Oculus button to recenter if your seat drifts. If smooth turning ever makes you queasy, a snap-turn version is in the commit history.

The VR build trades some effects for frame rate. It has no bloom or mirror reflections (its rain is a lighter version: fewer streaks, a faked wet street, drops on the windshield), uses a smaller world with closer fog, and has fewer cars. Dropped frames in a headset cause nausea, not just stutter.

## Desktop controls

- **1 / 2 / 3 / 4:** Street, Drone, Sky, Fly camera
- **W A S D:** fly, **E / Q** up and down, **Shift** boost
- **Drag** or **arrow keys:** steer
- **Space:** fire (pause in the other modes), **P** pause
- **C:** chase or cockpit view
- **R:** rain on/off
- **N:** new city

**Game controller (desktop build):** Xbox, PlayStation and most Bluetooth controllers work, on a PC or paired with a phone. Press any button once so the browser shows it to the game. Left stick flies, right stick steers, right trigger fires, left trigger boosts, RB/LB climb and dive, Y switches view, Start opens the menu. In menus, use the d-pad or left stick, A to select and B to go back. It rumbles on hits, kills, crashes and while firing.

## Getting old versions back

Every change is saved as a commit, so nothing is lost when something breaks.

- **See the history:** open the repository on GitHub and click **Commits**.
- **Grab an old file:** open any commit, click **Browse files**, open the file, then **Raw** and save it.
- **Undo a bad change for everyone:** from a terminal run `git revert <commit-id>`. This adds a new commit that cancels the bad one, so the history stays intact.

Avoid `git push --force` and `git reset --hard` unless you are sure. Those are the commands that can actually throw work away.
