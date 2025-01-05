# Blameless postmortems
#publish 
Opened [[2025-01-01]]. From [[Musings on tech]].

I've worked on 3 separate Google SRE teams since joining in 2020. One thing I see the SRE org execute on really well is blameless postmortems. In other words, a [[Technical postmortems|postmortem]] where there's no finger-pointing at individuals, and instead a focused effort to improve the lapse in process that caused something to break.

Google's popular SRE book has an excellent [section](https://sre.google/workbook/postmortem-culture#model-and-enforce-blameless-behavior) explaining how to write blameless postmortems. But it skimps a bit explaining _why_ you should want to write them in the first place, so I'm here to babble about that topic.

## Why you should virtually always prefer a blameless postmortem

### The obvious reasons
It's polite, and healthier for group morale. Higher morale leads to all sorts of positive emergent culture patterns:
1) People feel comfortable communicating bad news to leadership early, without fear of retaliation.
2) Developer velocity improves, because engineers feel more protected taking (healthy) risks.
3) Everyone's happier.

And besides, it's nice to not point fingers. Nobody enjoys a meeting where one person gets chastised on front of everyone for their mistake -- not the audience, nor the presenter, nor the chastisee.

### Less obvious reasons you should want blameless postmortems
Acting blamelessly lets you review your _processes_ with much more effective scrutiny than if you'd attributed an outage to a human. 

The larger insight I'm ramping up to is that _blameless postmortems rarely work in the long term anyways_ -- blaming humans for outages typically ends up being a band-aid fix that only lasts until someone forgets. Lurking below most human errors is typically a complicated process-based problem.

Blaming a human ensures:

- That person won't repeat their mistake.

... and that's about it. If you're lucky enough that everyone on your team reads your postmortem, and it strikes the fear of _((deity))_ in their hearts, nobody else will repeat that mistake either. For a while. Until they forget, or you hire someone new, or an opaque technical change happens, etc. ...

Whereas blaming a process (and then improving the process) ensures:

- That category of mistake won't happen again, at least not in that same way.

Improving a process typically costs more effort in the short term than blaming a human. Even the exercise of determining what may be improved can require input from technical stakeholders whose time is valuable. Improvements also cost SWE-time to implement, so you may find yourself making tough tradeoffs between moving fast and breaking things, versus prioritizing a process improvement in order to prevent breaking things. Choosing what to prioritize is difficult, and best decided via either well-sharpened intuition (for teams in scrappy situations) or an organic checks-and-balances culture between developers and DevOps engineers who can suggest how to manage their own time. (This culture is also easier to cultivate when issues are blameless, and stakeholders can voice their honest opinions.)

Anyways, even if your team doesn't have the bandwidth to deliver large improvements, it's still a useful exercise to brainstorm how you might do it -- blamelessly.

Don't trick yourself into believing that blaming the person who triggered an outage will prevent that outage from happening again. Best case scenario: it doesn't, only for a little while.

## The bottom line
Blame processes, not people.

## Appendix
### On laziness causing outages
Outages are bad and lazy actions often cause outages. Therefore, it can be tempting to assume that the root cause of certain outages is pure laziness, especially if it seems like laziness:

> For example: Person X forgot to run unit tests, even though the launch documentation clearly told them to.

Even in cases where human carelessness seems to be the issue: dig deeper. Don't give into the thought pattern that you're seeing the real issue. If people can forget once, they can forget again, especially as your team scales larger or its workload increases. (Separately: one-off mistakes are a very biased metric to measure someone's performance by. It's possible Person X's project is riskier than others', for example).

It's better to brainstorm deeply about what can be improved. Anything from updating an internal wiki page, to making tests automatic, to rewriting something more serious. You don't need to necessarily do these things. But surveying your options is good and helps keep the team aware that they can influence the processes they use. This is actually especially true if Person X happens to be lazy -- you should configure processes that don't allow laziness to cause outages.

One last note on laziness. I like the quote:

> "You do not rise to the level of your goals. You fall to the level of your systems."

### On postmortem culture being "professional" and war room comms being "unprofessional"
Redacting names from a postmortem is typically good, since it's [not process-relevant](https://sre.google/workbook/postmortem-culture#counterproductive-finger-pointing) who broke something.

Redacting names in a war room is... doable, but probably unproductive. Remember: what you really want is to nurture a culture where people feel comfortable chirping up that their code _might_ be the culprit of an outage. Typically when people are confident their code is broken, they'll speak up -- but your job as an incident commander and postmortem steward is to make folks feel comfortable speaking up before they're confident. This lets you get experienced eyes on a pull request, and mitigate outages quicker.
