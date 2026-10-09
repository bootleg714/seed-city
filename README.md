# Seed City

An endless, procedurally generated city that grows from a single number. Every tower, lit window, car, neon sign and searchlight is computed from the seed as you fly. Nothing is stored or downloaded except the three.js library.

## Play it

| Page | What it is |
| --- | --- |
| `index.html` | **VR build.** Open it in the Meta Quest browser and press **Enter VR**. Also runs as a flat preview on any computer. |
| `desktop.html` | **Full desktop build.** HDR bloom, rain with wet-street reflections, car reflections, chase and cockpit views. |

Once GitHub Pages is on, the links are:

- VR: `https://bootleg714.github.io/seed-city/`
- Desktop: `https://bootleg714.github.io/seed-city/desktop.html`

## Game modes

A menu floats over the live city when you start (in VR, point a controller at it and pull the trigger; on a flat screen, click).

- **Free Flight:** fly anywhere.
- **Races:** each seed grows three checkpoint courses that follow the streets. Fly through the rings in order: the next ring is amber, the one after is cyan, and the green ring is the finish. A floating arrow points the way, a 3-2-1 countdown starts you off, and your best time for each course is saved on the device (per seed).
- **Courier:** a delivery shift on a clock. Fly to the cyan light column, slow down over the rooftop pad and hold steady to load the package, then race it to the amber column. Faster deliveries pay more credits, every delivery adds 12 seconds to your shift, and bumping buildings with cargo aboard costs you. Your best shift per seed is saved.
- **Combat** is coming soon.

## Music

The soundtrack is composed live from the seed: each city gets its own minor key, chord progression and tempo, with slow detuned synth pads, a soft bass and bell notes in a big reverb. During Races and Courier a driving layer (arpeggio, soft kick, hi-hats) fades in. Toggle it with **Music** in the menu (or **M** on desktop); it also follows the Sound on/off button.

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

The VR build trades some effects for frame rate. It has no bloom, rain, or reflections, uses a smaller world with closer fog, and has fewer cars. Dropped frames in a headset cause nausea, not just stutter.

## Desktop controls

- **1 / 2 / 3 / 4:** Street, Drone, Sky, Fly camera
- **W A S D:** fly, **E / Q** up and down, **Shift** boost
- **Drag** or **arrow keys:** steer
- **Space:** fire (pause in the other modes), **P** pause
- **C:** chase or cockpit view
- **R:** rain on/off
- **N:** new city

## Getting old versions back

Every change is saved as a commit, so nothing is lost when something breaks.

- **See the history:** open the repository on GitHub and click **Commits**.
- **Grab an old file:** open any commit, click **Browse files**, open the file, then **Raw** and save it.
- **Undo a bad change for everyone:** from a terminal run `git revert <commit-id>`. This adds a new commit that cancels the bad one, so the history stays intact.

Avoid `git push --force` and `git reset --hard` unless you are sure. Those are the commands that can actually throw work away.
