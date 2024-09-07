# Frontmatter protocol
#publish 
Opened [[2023-08-20]]. Replaces [[Daylio protocol]].
Related to [[Productive Platypus]] and [[Productive Platypus metrics]].

## History of the system
- [[2023-08-20]]: First added
- [[2023-08-26]]: First major edit (retroactively performed [[2023-09-04]])

Stuff todo:
- make it x/10 instead of x/5 fractional
- come up with a way to not have the dumb colons



## Current system ([[2023-08-26]] - present)
Obsidian added formal support for Properties over frontmatter, so I guess I'm using that now.

Also the frontmatter before was way too heavyweight. It must be made leaner otherwise I won't do it.

Specific things that might matter:
- "n/a" appears when I don't fill out mood or focus
- The weird colon links are still there, I'm too lazy to fix
- No more parentheses
- maybe remove "wfo" on weekdays -- it's not relevant?
### Example frontmatter

```
---
mood_and_focus_tuples:
- time, mood (1-5), focus (1-5)

stimulant_tuples:
- time, amount

activity_tags:
- TODO
- breakfast:skipped/healthy/ok/unhealthy
- lunch:skipped/healthy/ok/unhealthy
- dinner:skipped/healthy/ok/unhealthy

retrospectives:
- overall_mood: TODO
- overall_focus: TODO
- first_woke_at: TODO
- uninterrupted_sleep: TODO

---
```





## Historical (before [[2023-08-26]])
### Example frontmatter

```
---

overall_mood (1-5): TODO
mood_tuples:
- (3:00, 4)
- (4:00, 3)

overall_focus (1-5): TODO
focus_tuples:
- (4:00, 2)

first_woke_at: 6:20
uninterrupted_sleep: 9.5

stimulant_tuples:
- (6:30, 1ER)

meal_tuples:
- (6:30, unhealthy, snack)
- (12:00, healthy, lunch)

activity_tags:
- wfh
- obsidian

---
```

### Valid `activity_tags`
**Keep alphabetized.**
Maybe I should commit to choosing, like, 3 of these to represent my day.

- date
- home_alone
- obsidian


### Babble
This is the frontmatter format I'll be using to tag my daily notes. Idk what I'll do with them next.

