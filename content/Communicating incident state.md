# Communicating incident state
#publish 
Opened [[2025-01-01]]. From [[Musings on tech]].

My SRE team needs to review outages after they happen. To make this go smoother, I like using the following format in the outage notes:

> **Cause:** XYZ
> 
> **Effect:** ABC
> 
> **Action:** XYZ
> 
> **Meta/followup:** (Optional) ABC

Remember, cause != trigger.

"Meta/followup" includes info like whether this sort of outage has happened before, and if I've already booked any followup work to ensure it doesn't happen again. Sometimes there is already followup work scheduled or we're just in the discussion stage; the format is flexible.

## Tagging outages
For data analysis purposes, it's also useful to track where outages come from. My team doesn't use these exact tags, but in a perfect world I would track:
- action: {escalate, rollback, etc.}
- cause: {dependency, network, datapush, etc.}
- effect: {crashes, errors, etc.}
- service: {name_of_your_service_impacted}
- discuss: {yes, no}

Also, if you are trying to dig an unhealthy service out of a hole by figuring out where the highest-impact areas to add observability/safety systems, you may also wish to track:
- detected_by: {human, alert}
- can_detect_with: {tools, that, should, detect, the, outage}
- can_prevent_with: {tools, that, should, prevent, the, outage}

## For postmortems
Highly recommend the format in https://sre.google/sre-book/example-postmortem/
- "Where we got lucky" can be lifted from https://sre.google/workbook/postmortem-culture/
- Related article on this topic: [[Blameless postmortems]]
