# devhelp-content

The curriculum behind [devhelp.pk](https://devhelp.pk): courses, lessons, quizzes, and exercises for software engineers and students in Pakistan. Free forever, licensed CC BY-SA 4.0.

Content is plain files:

```
paths/<slug>.yaml                          ordered groups of courses
courses/<course>/course.yaml               course identity, prerequisites, completion rules
courses/<course>/NN-<module>/module.yaml   module identity
courses/<course>/NN-<module>/NN-<lesson>.mdx   lesson body + frontmatter
courses/<course>/quizzes/<id>.yaml         quiz questions (answers stay server-side on the platform)
courses/<course>/exercises/<id>/           exercise.yaml, README.mdx, starter/, solution/, tests/
badges/<slug>.yaml                         badge rules
```

Ordering comes from the numeric prefix on directories and files. Identity comes from the `slug` in each file, so renaming a file never breaks a learner's progress.

## What lives here, and what does not

This repo owns **what the content is**: lesson bodies, quiz questions, exercise files, and the structure holding them together. A lesson declares its `slug` and its `type`, plus the reference that makes it that type — a `video`, a `quiz`, an `exercise`.

It does **not** own how content is described. Titles, summaries, levels, durations, cover images, whether a course is published, and who is credited all live in the platform's database and are edited by mentors at `learn.devhelp.pk/studio`. Putting a `title:` back in a lesson will fail the check with a message saying so.

The split is deliberate: correcting a typo in a title should not need a pull request, a review, and a deploy, while changing what a lesson teaches should need all three.

## Checking your changes

The schema and checker live in the platform repo. From a checkout of [`devhelppk/devhelp-platform`](https://github.com/devhelppk/devhelp-platform) next to this one:

```sh
pnpm install
pnpm content:check ../devhelp-content
```

CI runs the same check on every pull request.

## How content reaches the site

The platform pins a commit of this repository in `content.lock.json`. When a pull request here is merged, a workflow opens a pull request on the platform bumping that pin; deploying the platform compiles the lessons and syncs the metadata. See `docs/specs/S2-content-pipeline/plan.md` in the platform repo.

See [CONTRIBUTING.md](./CONTRIBUTING.md) to write a lesson.
