# perdicis-notes (forked from Quartz v4)

This is my personal knowledge graph. It's a minimalist setup of Quartz. If you like it, check out https://quartz.jzhao.xyz/ to get your own!

## My workflow

Against Quartz's recommended setup, I do all my note-taking outside of this repository. This repo is purely for publishing specific notes to the web, and that's it.

My workflow looks like this:

1) I write in my Obsidian vault like normal. If there's a note I want to publish, I tag it with `#publish` (every article you see here has that tag somewhere).
2) When it's time to publish, I run `rm /content/*` , `python3 misc/get_notes.py` , and then `git restore content/index.md`. Then `npx quartz sync`. TODO: Write a script to do this all at once.
3) Goto 1

Refreshingly simple!

## Setup

If you want to get this setup too, do the following:

1) Set up a default configuration of [Quartz](https://quartz.jzhao.xyz/).
2) Copy the contents of the `misc/` folder, which has the code I use to copy notes.
3) Rename `paths-TEMPLATE.py` to `paths.py`.
4) Update the paths in `paths.py` to fit your directory structure.
5) Inside `get_notes.py`, update `VAULT_EVERGREEN_PATH` to have the correct suffix to point to your Zettelkasten directory (all my notes are in a single directory). Also, update the line near the bottom that references `/Attachments/` in the path (all my attachments like images are in that directory.

The workflow should work after that!
