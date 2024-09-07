# Productive Platypus
#publish
Opened [[2023-07-17]]. Name WIP (thanks Rudy).
Related to the type A-ness of [[Bryan Johnson finishes his last meal at 11am]].

### Metrics
Moved to [[Productive Platypus metrics]].

### Ideas
Maybe the goal should be me being able to record data whenever I want. And I'll get reminders to record data after it's been a while
- Yes! This is what Metriport allows for.
- Update [[2023-07-28]]: Furthermore, maybe I should allow for dated AND non-dated entries. Maybe that would complicate the correlation function though.

In general, my limited ML understanding tells me that binary metrics aren't very useful whereas ranges like 1-5 are.
- Conclusion: prioritize 1-5 where possible

Also, neutral tags will only be statistically significant if I consistently tag entries.
- Conclusion: Set up tags for things that I only believe are statistically significant.


### Metriport
[[2023-07-23]]: Found [Metriport](https://metriport.ai/habit-tracker.html), software that does almost exactly what I'm trying to achieve with this project. Except it's closed-source and requires a subscription to fully use your data. And the developers have clearly moved on to some other project (although this was originally YC-backed, which is neat).

How frustrating. I can practically hear the countdown clock ticking till this app's delisting on the Play Store.

I think what I'll do is:
- Use the app for a little while. The preset options are already giving me ideas of what to track.
- Reverse-engineer the app's methodologies to fit a csv-pattern that I can take full control of with my data later.

Tracking this in [[Reverse-engineering Metriport]]

(Also, a side-note on viability as a startup/side-hustle: with all the AI craze I think people would be interested in a streamlined way to collect data to improve their health)

[[2023-08-12]]: Getting an MVP off the ground is harder than I anticipated so I'm considering ditching Metriport for something that works better and isn't obnoxiously designed. Opened a section on this.

### Todos from [[2023-07-29]]
1) Export some demo metrics as csv to see how they're stored, in case that sparks any thought.
2) Finish brainstorming which metrics to record. Then, either:
3) Implement the metrics into Metriport; or try Kenneth's app.
4) Configure reminders per time of day (I should probably have several) to fill in data.

(I never actually did these things)
### Metriport alternatives
Written [[2023-08-12]]
AFAIU none of these are as time-granular as Metriport.
- Daylio - Kenneth uses this. 10M downloads on the play store. Not sure how IAPs work.
	- Pros:
		- Solid support for visualizing the data per factor
		- Can export raw data as CSV
			- Can also rename qualities like rad->5 and the app will retroactively edit entries and make it compatible in the CSV
	- Cons:
		- I despise the UI with every ADHD bone in my body.
		- Ads everywhere and IAP banner
		- No support for tagged activities.
		- No support for quantifiable things, i.e. hours of sleep, weight gain
- Bearable - Seems like the same as Daylio
	- Major pro:
		- A crackhead UI designer on the dev team is active basically daily on /r/bearableapp gauging interest in new ideas
	- Pros:
		- Lets you track social interactions per person.
		- [This wonderfully neutral post](https://www.reddit.com/r/BearableApp/comments/jit31t/what_makes_this_differentbetter_than_daylio_i/ga9mowo/) on Reddit suggesting Bearable is more of a medical tool than flashy.
		- Integrates with GFit
		- Support for custom experiments (can integrate with weekly retros)
		- Decent support for visualizing data per factor
	- Cons:
		- UI is clunky
		- No support for tags
		- Custom metrics locked behind paywall
		- Correlations locked behind paywall
		- Paywall is expensive ($35/y)
		- Needs account
- Moodflow - Alternative made by someone from /r/daylio.
	- Pros:
		- Really intuitive UI for calendar and for entering otherwise complex stuff like bedtimes and meds.
		- Lets you track social interactions per person.
		- No account needed.
	- Cons:
		- Correlations locked behind monthly sub.
		- Exports data as a nightmarish JSON it makes sense there's 1 dev working on this
	- Major con:
		- No support for custom metrics. 
		- "Activities" comes close but can't add tags to it. So I want to have meals as tags and then say whether it was healthy or not, but I can't. Can't enter weight either.
- Exist
	- Looks great and custom and a small dev team but can't own my own data and it's default paid subscription
- https://nomie.app
	- It's dead after 8 years of development
	- The dev suggests other apps to use... and I don't like them. I might be SOL


### Beyond Metriport / True Productive Platypus
Written [[2023-08-13]]

At this point I'm 100% sure there isn't an app out there for me. I need to make my own.

I'll try doing a CSV hooked up to a ton of IFTTTs.
- Can integrate Google Fit
- Can integrate Sleep as Android probably


### Yeah I didn't do that
I'm just using Daylio with per-day granularity. I decided on a whim on [[2023-08-14]] and developed the [[Daylio protocol]].

### Brainstorming frontmatter
By coincidence the next day on [[2023-08-15]] I learned Obsidian 1.4 has formal support for frontmatter.

Maybe I should use Obsidian as my daily driver equipped with frontmatter, then export that to Daylio -- and eventually, export it as my own csv format (thought more deeply on this [[2023-08-19]]). It's a good idea. What I wrote:

> Yo what if I added Daylio frontmatter to the daily note template. Then I can just port it whenever. And also keep track of my weight because Obsidian lets me do whatever I want... good idea tbh.

Lol I remember being more articulate.


### Deprecated Daylio for frontmatter
On [[2023-08-20]] I deprecated [[Daylio protocol]] in favor of [[Frontmatter protocol]]. 


### Correlation ideas for frontmatter
Just some ideas of what to look for that I'm curious.

- Presence of breakfast --> bad producitivity
	- And then also what causes breakfast?
- Lack of exercise / bad productivity --> bad sleep
	- This could explain why the pendulum happens/doesn't happen
