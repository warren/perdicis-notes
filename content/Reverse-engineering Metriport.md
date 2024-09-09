# Reverse-engineering Metriport
#publish 
Opened [[2023-07-23]]. Related to [[Productive Platypus]].


## Notes
Retroactively adding entries is hard.

Shit. 3 months ago they killed support for iOS premium, cancelling peoples' subscriptions and locking them out of the app. The app is dying as I write this. https://www.reddit.com/r/metriport/comments/11rfj0d/is_metriport_ever_returning/

### Adding a new metric
When you add a new metric, it asks you to categorize it with tags like "finance" "fitness" "habits" "health".

Then "Data type" (confusing, so I'm italicizing the important bits imo):
- Numerical: "Good for single or multi category _cumulative totals_, such as spending, time tracking, or caffeine intake"
- Continuous (?): "Good for _averaging and monitoring a single numeric value_, such as weight, BMI, or blood pressure"
- Absolute: "Good for _one-tap entries_ with discrete ranges. Useful for tracking habits, and ranking things high to low"
	- Can this only do 0 or 1?
- Text: "Good for text entries, such as a _personal diary or journal_"
	- Heh.

Then chart for visualizing:
- Line
- Bar
- Pie
- Doughnut

Then "Categories": "How do you want your data styled?"
- Icon
- and color.

### Integrations
It can integrate with google fit and OpenWeather which is neat.

## Complaints
Why cant I dismiss the stupid white face at the top of the app. Jk I can, it's just hidden in a skip button buried in the back.

Why are there character limits on EVERYTHING I can't type a full sentence anywhere

There's no way to have a metric apply to a whole day (e.g. "I am oncall today"). Not sure how to get around that. Maybe it's just not compatible with the system.

Why is there a slider bar connecting category entries

Why can't I set the incremental defaults on numerical metrics. "1" is a good number but "5" is high and "20" to "100" why do you even exist
