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

## VR controls (Quest)

- **Left stick:** fly forward, back and sideways
- **Left trigger:** boost
- **Right stick:** left/right snap-turns 30°, up/down climbs and dives
- **Right trigger:** fire lasers where you point
- **A:** cycle time of day
- **B:** grow a new city
- **X:** light beams on/off

Hold the Oculus button to recenter if your seat drifts.

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
