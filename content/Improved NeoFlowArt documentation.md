# Improved NeoFlowArt documentation
#publish
Opened [[2024-09-17]]. Related to [[Contact staff]] and [[Flow]].

[NeoFlowArt](https://neoflowart.com) makes some awesome LED props but the documentation is hard to read because it's dense technical instructions translated from Russian.

This page is, like, the Wikipedia "Simple English" version of the manual.

## Warren's simple English manual
### Terminology
Bottom button = BB
Top button = TB

### On / off

Turn on:
- Hold BB 3sec

Turn off:
- Hold TB 3sec

Turn on (with energy saver mode on):
- Hold BB 4sec
- Release after purple flash

Deactivate energy saver:
- Turn the prop off and on again

### Browsing

The prop has a really basic UI: a single green LED telling you how far you have navigated in a directory.

When the prop turns on, it'll be on whatever setting it was from last time. This gets confusing so the first thing to do is:

Return to the first folder:
- Hold BB 2sec [^1]
- Release when you see the red flash

This will immediately show an image because you are in the static images folder (internally called "group" folder, idk why). Basically, there's one folder in the prop which contains images which don't change automatically. You're in that folder, viewing the first image.

Navigate to the next image:
- Press BB

Navigate to the previous image:
- Press TB

Every other folder on the prop is a timeline folder (internally called "prog"). To navigate to those, do the following at any time:

Navigate to the next folder:
- Hold BB 1sec
- Release when you see the green flash

Navigate to the previous folder:
- Hold TB 1sec
- Release when you see the green flash

Then, use the following section to use timelines.

### Timeline control

Start a timeline:
- (from within the blinking green light of a timeline folder)
- Press BB
- See the purple line draw up, then whole staff goes off
- Press any button and timeline will start

Restart active timeline:
- Press TB

Skip to next image in active timeline:
- Press BB


### Notes about messing with the prop internals 

In order for props to sync, they need to 
1) be on the same radio channel
2) have the same number of folders and images inside them

Btw I should take a backup of the staff images before messing further





### Footnotes

[^1]: The manual says 5sec but that doesn't seem right
