# perdicis-notes
Perdicis Notes project.

## Deploying
1) Do `python3 misc/get_notes.py` to move notes tagged with #publish from the Obsidian directory on your computer to this repo's `content/notes` directory for it to be published. This operation updates old notes too, you don't need to delete them.

2) Do `npm run deploy -- -m "Commit message"` to generate a static build of the site and commit it to the live gh-pages branch.

What happens under the hood: `npm predeploy` automatically triggers before `npm deploy`, building the site and adding the notes.perdicis.com `CNAME` into the build directory. `npm deploy` commits the build directory contents to gh-pages and `--` lets us pass additional options (in this case a message string) to the deploy script.