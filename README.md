# perdicis-notes
Perdicis Notes project.

## Deploying
1) Do `python3 misc/get_notes.py` to move notes tagged with #publish from the Obsidian directory on your computer to this repo's `content/notes` directory for it to be published. This operation updates old notes too, you don't need to delete them.

2) Do `npm run deploy -- -m "Commit message"` to generate a static build of the site and commit it to the live gh-pages branch.

What happens under the hood: `npm predeploy` automatically triggers before `npm deploy`, building the site and adding the notes.perdicis.com `CNAME` into the build directory. It also adds a robots.txt (more on that later). `npm deploy` commits the build directory contents to gh-pages and `--` lets us pass additional options (in this case a message string) to the deploy script.

### About the robots.txt generation
It gets generated during `npm predeploy`. I committed this terrible sin because the official Gatsby plugin for robots.txt breaks NPM due to dep tree issues. I spent a while debugging that problem on 2024-09-06 and gave up. The long term fix, sadly, is to migrate to a framework with a more modern ecosystem like Nextjs. The packages I'm using now are in various levels of sunset. But I don't see any Obsidian-friendly MDX packages for Nextjs yet so maybe next(js) time.
