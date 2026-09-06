# devhelp-content

The curriculum behind [devhelp.pk](https://devhelp.pk): courses, lessons, quizzes, and exercises for software engineers and students in Pakistan. Free forever, licensed CC BY-SA 4.0.

Content is plain files:

```
paths/<slug>.yaml                          ordered groups of courses
courses/<course>/course.yaml               course metadata
courses/<course>/NN-<module>/module.yaml   module metadata
courses/<course>/NN-<module>/NN-<lesson>.mdx   lesson body + frontmatter
courses/<course>/quizzes/<id>.yaml         quiz questions (answers stay server-side on the platform)
courses/<course>/exercises/<id>/           exercise.yaml, README.mdx, starter/, tests/
badges/<slug>.yaml                         badge rules
companies/<slug>.yaml                      verified company facts only
```

Ordering comes from the numeric prefix on directories and files. Identity comes from the `slug` in each file, so renaming a file never breaks a learner's progress.

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
