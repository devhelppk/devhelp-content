# Contributing content

Thank you. Every lesson here is read by people trying to get their first job or their next one, mostly on a phone. Write for them.

## Before you start

- Open an issue describing the lesson or course, or pick an open one.
- Read one existing lesson end to end to match the voice: direct, concrete, no filler.
- By opening a pull request you agree your contribution is licensed CC BY-SA 4.0 and you are credited by your GitHub handle in `authors`.

## Writing a lesson

1. Add `NN-<name>.mdx` inside the module directory. `NN` sets the order.
2. Frontmatter (required): `slug`, `title`, `type` (`article`, `video`, `quiz`, `exercise`, `project`, `link`), `durationMinutes`, `authors`. Optional: `mode` (`foundation` = no AI assistance, `industry` = AI allowed, you own correctness), `isRequired`, `isFree`, `reviewers`, `updated`.
3. Structure for articles, adapted from The Odin Project: a short intro that says why this matters, the lesson, a "Try it" section, a "Knowledge check" (3 questions the reader should be able to answer), and "Further reading".
4. Keep paragraphs short. Use headings every few paragraphs. Code blocks get a language tag. Internal links use `/courses/<course>/<lesson>`.
5. Videos: `type: video` with `video: { provider: youtube, id }`, unlisted on the devhelp channel.
6. Quizzes: `type: quiz` with `quiz: <id>` pointing at `quizzes/<id>.yaml`. Every wrong option gets `feedback` that teaches something.
7. Exercises: `type: exercise` with `exercise: <id>`; put starter files in `starter/`, a working answer in `solution/` (same file names), tests in `tests/`, instructions in `README.mdx`. CI runs the tests against `solution/` and expects `starter/` to fail at least one.

## Review

A pull request needs one review from a mentor in the track and one from an editor. CI must pass. Small, single-lesson pull requests merge fastest.
