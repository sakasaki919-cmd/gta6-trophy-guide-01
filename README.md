# Leonida Trophy Guide &amp; Tracker — GTA 6

[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/sakasaki919-cmd/gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/sakasaki919-cmd/gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

Entry for the [make.fun](https://make.fun) bounty [gta6-trophy-guide-01](https://make.fun/bounty/gta6-trophy-guide-01) — "Build the best GTA 6 trophy guide".

An offline guide and tracker for all 55 Grand Theft Auto VI trophies on PlayStation 5. No server, no account, no network — open `app/index.html` in a browser and it just works.

## What it covers

- **All 55 official trophies** — 1 platinum, 2 gold, 6 silver, 46 bronze (28 hidden), each with its official name, description and grade exactly as PlayStation publishes them, plus a guide in our own words that cites its sources.
- **Tracker** — check off trophies as you earn them; progress saves in the browser (localStorage) and can be exported to a file and imported back. Filter by grade, kind (story, stranger arcs, collectibles, activities, exploration, combat, misc), status and missable-only; search by name, description or guide text.
- **Spoiler setting** — hides the names and descriptions of story trophies until you earn them.
- **Platinum roadmap** — five stages in the order to play them, with the missable stranger arcs flagged to finish before the final mission.
- **Missable flags** — 10 trophies that can lock out or be missed, each with why and when to do it.

## Run it

```sh
# Any static server, with app/ at its root:
node serve.ts        # → http://localhost:8080
```

It also works by opening `app/index.html` directly from disk — no build step, no dependencies, no network requests at all.

## Data

`app/data/trophies.json` holds the full list: each trophy's official name, description, grade, hidden flag, kind, missable flag, guide and source. Names, descriptions and grades match the official list (Exophase / PSNProfiles, frozen 2026-11-18). Guide text is original, written from those official descriptions.

## License

MIT — see [LICENSE](LICENSE). This guide is not affiliated with Rockstar Games or PlayStation, and it uses no Rockstar logo, artwork or screenshots.
