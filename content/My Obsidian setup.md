# My Obsidian setup
#publish 
Related to [[Obsidian callout cheatsheet]].

Semi-related to [[Obsidian setup at work]] and [[Obsidian art project]].

## File sync
I keep Obsidian files in sync via Google Drive on 2 devices: my PC and my Pixel.

I created a folder on Google Drive called Obsidian Vaults, and placed this vault, Waulter, inside.

On my PC:
- I downloaded the Google Drive sync app. This required some messing around with. I think what I did was make the GDrive folder "available offline" on my PC. Then I opened Obsidian, and pointed it at the special GDrive directory that the sync app had created. Any file I mess with in there gets mirrored instantly to GDrive. Notably, the app is so good that this happens instantly in real-time. I sync my phone, it updates on my computer. Pretty cool.

On my Android:
- I have [DriveSync](https://play.google.com/store/apps/details?id=com.ttxapps.drivesync) installed and configured to sync my phone's Waulter directory to GDrive every 2 hours. I originally had it sync "on file change", but that proved to be glitchy and cause a lot of tedious merge conflicts. DriveSync only lets you sync one folder which is all I need.
	- [[V-Day]] was triggered by a SNAFU combination of factors. Overall takeaway: be aware that Google Drive modifies your file names and slices up your vault into tiny .zip files instead of a big .zip.
- Also, disabled battery optimization for the Android app on [[2023-09-26]]; otherwise it'll force the app to fully restart each time. Hopefully this doesn't annihilate my battery.
    - Ongoing issue as of [[2024-09-13]]. Still unsure how to fix.

## Community Plugins
These need to be installed and configured on both PC and mobile separately.
- Advanced URI by Vinzent
	- Lets me set up Tasker macros on my phone to access today's journal entry.
	- ... But it's not all sunshine and roses, see the Advanced URI for Tasker section for why
- Templater by SilentVoid
	- Lets me set up a basic note template. I use this for my daily note and for generic notes that just have the H1 at the top.
	- Note: I needed to set up mappings in the plugin settings.
- Files & Links by Obsidian
	- This is a core plugin but worth a mention because I needed to configure where new notes and attachments should go.

## Themes
These will probably change as I find ones that work better.
- Sanctum by jdanielmourao
	- Really nice dark theme overall.
	- On mobile, header sizes get a bit messed up because headers are smaller than the text underneath them.
	- Also on mobile, the "edit/view" button is a floating action button right under my thumb. Not my fave.
- Yin and Yang by Chetachi E.
	- Not bad dark theme. I don't love the color theming but I could theoretically overwrite that.
- Things by Colin Eckert
	- Not bad dark theme. I like the colors a bit more than Yin and Yang but the text size slider is broken on mobile so the text is too small.
- Primary by Cecilia May
	- Atrocious default setup but the sizing on all the headers is perfect. Maybe with some editing this will be perfect.
	- This was the one I ended up using until I switched phones around [[2023-10-18]]. The last commit was October 2022 and this theme doesn't seem like it's getting 1.0 compatibility. Sad. Maybe I can check in on it later. https://github.com/ceciliamay/obsidianmd-theme-primary
	- In the meantime I've copied the legacy CSS file over.
- Obsidian You by Joschua
	- I don't love the fonts but this is pretty great.
	- It's mobile-first which is probably why.
- Claire de Lune
	- Not bad.

## Advanced URI for Tasker
I use Tasker to configure little buttons for Obsidian shortcuts.

![[Screenshot_20230421-105621~2.png]]

The setups I have now are:

**Search for todos** Browse URL:
`obsidian://search?vault=Waulter&query=todo`
(This one doesn't require advanced URI)

**Open daily note** Browse URL: `obsidian://advanced-uri?vault=Waulter&daily=true&heading=wololo&viewmode=source`
This one was annoying to set up. The `&heading=wololo` wasn't necessary until something changed in mid 2022 causing this to happen whenever I'd open my daily note while having the same page open from a previous session:

![[Screenshot_20230421-102157.png]]

Not sure what's going on here; it's not quite a search UI nor is it a backlinks page (if I had to guess, it looks like Obsidian is performing a search for the current date, 04/21). Weird. Anyways, it turns out Advanced URIs opens all pages like this if you previously had a session opened to the same page. Adding a bogus header like `wololo` overrides whatever special logic gets triggered for "open the same file that was open in a previous session," so that's what I'm doing.

## Appendix
If I ever need clickable graphs, [mermaid](https://www.reddit.com/r/ObsidianMD/s/vP5fBlGx3Q) seems really cool 

