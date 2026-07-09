# Blameless postmortems
#publish 
Opened [[2025-01-01]]. From [[Musings on tech]].

I've worked on 3 separate Google SRE teams since joining in 2020. One thing I see the SRE org execute really well is blameless postmortems. In other words, a [[Technical postmortems|postmortem]] where instead of finger-pointing, there's a focused effort to improve the lapse in process that caused something to break.

Google's popular SRE book has an excellent [section](https://sre.google/workbook/postmortem-culture#model-and-enforce-blameless-behavior) explaining how to write these. But IMO it skimps on explaining _why_ you should want to write them in the first place, so today I'm writing about that.

## Why you should virtually always prefer a blameless postmortem

### The obvious reasons
It's healthier for group morale. Higher morale leads to all sorts of positive culture patterns:
1) People feel comfortable communicating bad news to leadership early, without fear of retaliation.
2) Developer velocity improves, because engineers feel protected taking (healthy) risks.
3) Everyone's happier.

Plus overall it's pleasant to not point fingers. Nobody -- except perhaps sadists -- enjoys a meeting where one of their peers gets chewed out.

### Less obvious reasons you should want blameless postmortems
Blameless review actually lets you review your processes with better scrutiny than had you attributed an outage to a human. 

The larger insight I'm ramping up to is that _casting blame on humans rarely works_ because it distracts from fixing flawed processes. Lurking beneath most human-based _triggers_ are complicated process-based _root causes_.

To hammer this home, blaming a human ensures:

- That person won't repeat their mistake.

... and that's about it. Unless they forget (which they probably will). Or you hire someone new. Or an opaque technical change happens. My point is: even if you chew someone out so thoroughly as to strike the fear of _{{deity}}_ in their hearts, it only works in the short term.

Whereas blaming a _process_ (and then improving said process) ensures:

- That category of mistake won't happen again.

Obviously, the drawback to doing it the happy/process-blaming-based way is _cost_. Blaming humans is cheap; improving processes is not. Even the exercise of determining which process needs improvement may require input from technical stakeholders whose time is valuable. And what comes next -- actually _implementing_ the improvements -- also costs SWE-time.

So as a technical lead you'll often find yourself trading off between shipping fast with flawed processes, versus shipping slowly with thoughtful processes. Choosing which to prioritize is difficult, and best decided either via well-sharpened personal intuition (for teams in scrappy situations); or via your team's checks-and-balances culture wherein developers and DevOps engineers are empowered to manage their own project time against business priorities (btw, it's hard to cultivate such a culture _unless_ issues are blameless and stakeholders can voice honest opinions -- so start cultivating the culture early!).

## What you should do
Always avoid blaming humans. Instead, blame processes in as much depth as you have the bandwidth for.

What this looks like in practice is:
- Wherever possible, don't name and shame the human trigger.
- Cultivate an atmosphere of shared curiosity on the team.
    - Lead by example. Curiously (but persistently!) ask: "why?"
        - "Why did X happen?" --> "Because Y"
        - "Gotcha. Why did Y happen?" --> "Because Z"
        - "Interesting. Why did Z happen?" --> etc.
        - This method is commonly called the [5 Whys?](https://en.wikipedia.org/wiki/Five_whys) btw. By the time you reach the 3rd or 4th "why," you'll be discussing pretty deep topics like team culture. You don't always need to go that deep; but it can help.
        - FYI: you can often run this "Why?" exercise alone, outside of a meeting.
- When you identify a broken process, don't reward the person who identified it with the burden of fixing it.
    - They'll stop speaking up if you do.
    - Often times, it's fine to send the work to a backlog for later. Prioritize accordingly (or empower the finder to).

## The bottom line
Don't trick yourself: blaming the person who triggered an outage will not prevent that outage from happening again. Best case scenario: it doesn't, but only for a little while.

Even if your team doesn't have the bandwidth to deliver improvements to a process, someone (e.g. you, or a skilled tech lead) should be running the mental exercise of identifying and stackranking improvements.

Blame processes, not people!

## Appendix
### On laziness causing outages
Lazy actions often cause outages, so it can be tempting to assume that the root cause of an outage is pure laziness. This is especially true if it seems like laziness:

> For example: Person X forgot to run unit tests, even though the launch documentation clearly told them to.

Even in cases where human carelessness seems to be the issue: dig deeper. A lazy human might have been the _trigger_, yes, but what was the underlying cause? If a human can forget once, they can forget again, especially as your team scales in size or workload.

In scenarios with a human trigger, it's still better to dig into what process can be improved. Anything from updating an internal wiki page, to making tests automatic, to rewriting something more serious. Even if you don't implement these changes, brainstorming them allows you to learn the developer-agnostic cost of reliability, that is, the cost of reliability that doesn't live only in your current teammates' brains. Developers aren't fungible -- firing one and hiring another doesn't mean their shoes can be filled instantly -- so doing this exercise lets you understand where the reliability gaps are and make you more resilient to change.

(Side note: monitoring someone's # of production outages is often a ineffective performance metric. It's possible Person X is simply working on a riskier project).

### On redacting names (how aggressively should you do it?)
Redacting names from a postmortem is typically good, since they [aren't relevant](https://sre.google/workbook/postmortem-culture#counterproductive-finger-pointing) to making future improvements to your processes.

Redacting names in a live war room is... doable, but probably not worth it. Remember: blamelessness is just a means to an end. Its larger goal is nurturing a culture in which people feel comfortable chirping up that their code _might_ be the culprit of an outage. Your job as incident commander and future postmortem steward is to continuously push the comfort levels of folks in a healthy direction so they can speak up _before they're confident_. This lets you gather technical opinions faster, grease the wheels of conversation, and ultimately drive a faster fix.
