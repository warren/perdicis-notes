# Daily Journal template
#publish 
Opened [[2024-10-24]].

This is my daily journal template, which I designate using Templater (and, usually, a Tasker workflow) to generate my daily note. See [[My Obsidian setup]] for details.

The whole "anchor" system is described in [[Anchors]].

> [!info] THIS IS A COPY OF MY TEMPLATE
> Copy taken [[2024-10-23]].

```
# <% moment(tp.file.title).format("YYYY-MM-DD") %>
_<% moment(tp.file.title).format("dddd") %>._
[[Daily Journal/<% moment(tp.file.title).add(-1, "d").format("YYYY-MM-DD") %>|Yesterday]] | [[Daily Journal/<% moment(tp.file.title).add(1, "d").format("YYYY-MM-DD") %>|Tomorrow]] TODO: Today
Top

Pic
_Cap_
<%* if (moment(tp.file.title).format("dddd") != "Saturday" && moment(tp.file.title).format("dddd") != "Sunday" ) { %>
**Today's work anchor: TODO**
<%* } else { %>
<%* } %>
**Today's personal anchor: TODO**




<%* if (moment(tp.file.title).format("dddd") == "Sunday") { %>

#### Retro

> [!todo]+ Weekly retrospective (make sure to do one, then flip this callout to "done").
> [[Daily Journal/<% moment(tp.file.title).add(-7, "d").format("YYYY-MM-DD") %>#Retro|Last week]] | [[Daily Journal/<% moment(tp.file.title).add(7, "d").format("YYYY-MM-DD") %>#Retro|Next week]]
> 
> **1 thing I'm grateful for:**
> 
> **Patterns:**
> - bullet
> 
> **Anything to try differently going into next week:**
> - bullet

<%* } else { %>
<%* } %>

```








