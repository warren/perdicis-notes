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

And overall it's nice to not point fingers. Nobody -- except perhaps sadists -- enjoys a meeting where one of their peers gets chastised in front of their other peers.

### Less obvious reasons you should want blameless postmortems
Acting blamelessly lets you review your processes with more scrutiny than had you attributed an outage to a human. 

The larger insight I'm ramping up to is that _casting blame on humans rarely works anyways_, because it distracts from fixing flawed processes. Lurking beneath most human-based _triggers_ are complicated process-based _root causes_.

To hammer this home, blaming a human ensures:

- That person won't repeat their mistake.

... and that's about it. If you're lucky to have everyone read your postmortem, and it strikes the fear of _((deity))_ in their hearts, nobody else will repeat that mistake either... for a while, until they forget, or you hire someone new, or an opaque technical change occurs, etc. ...

Whereas blaming a process (and then improving said process) ensures:

- That category of mistake won't happen again.

Unfortunately, the drawback here is cost. Blaming humans is cheap; improving processes is not. Even the exercise of determining what process to improve may require input from technical stakeholders whose time is valuable. Improvements also cost SWE-time to implement, so you will find yourself making tough tradeoffs between shipping fast and breaking things, versus shipping slowly. Choosing which to prioritize is difficult, and best decided via either well-sharpened intuition (for teams in scrappy situations) or a checks-and-balances culture between developers and DevOps engineers who can suggest how to manage their own time (for teams in less scrappy situations -- also worth noting that this culture is easier to cultivate when issues are blameless, and stakeholders can voice their honest opinions).

Anyways, even if your team doesn't have the bandwidth to deliver large improvements, it's still a useful exercise to brainstorm how you might do it blamelessly.

## The bottom line
Don't trick yourself into believing that blaming the person who triggered an outage will prevent that outage from happening again. Best case scenario: it doesn't, but only for a little while.

Blame processes, not people.

## Appendix
### On laziness causing outages
Outages are bad, and lazy actions often cause outages, so it can be tempting to assume that the root cause of an outage is pure laziness. This is especially true if it seems like laziness:

> For example: Person X forgot to run unit tests, even though the launch documentation clearly told them to.

Even in cases where human carelessness seems to be the issue: dig deeper. A lazy human might have been the _trigger_, yes, but what was the underlying cause? If a human can forget once, they can forget again, especially as your team scales in size or workload.

In scenarios with a human trigger, it's still better to dig into what process can be improved. Anything from updating an internal wiki page, to making tests automatic, to rewriting something more serious. Even if you don't implement these changes, brainstorming them allows you to learn the developer-agnostic cost of reliability, that is, the cost of reliability that doesn't live only in your current teammates' brains. Developers aren't fungible -- firing one and hiring another doesn't mean their shoes can be filled instantly -- so doing this exercise lets you understand where the reliability gaps are and make you more resilient to change.

(Side note: one-off mistakes are a very biased metric to measure someone's performance anyways. It's possible Person X is simply working on a riskier project).

### On postmortem culture being "professional" and war room comms being "unprofessional"
Redacting names from a postmortem is typically good, since they [aren't relevant](https://sre.google/workbook/postmortem-culture#counterproductive-finger-pointing) to making future improvements to your processes.

Redacting names in a live war room is... doable, but probably not worth it. Remember: blamelessness is just a means to an end. The larger goal of blamelessness is nurturing a culture in which people feel comfortable chirping up that their code _might_ be the culprit of an outage. Your job as incident commander and future postmortem steward is to continuously push the comfort levels of folks in a healthy direction so they can speak up _before they're confident_. This lets you gather more technical opinions faster, grease the wheels of conversation, and ultimately drive a faster fix.
