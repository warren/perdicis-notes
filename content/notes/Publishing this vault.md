# Publishing this vault
#publish 
#needswork  - Polish pass
Opened [[2022-02-03]] (whoa, a while ago). Related to the [[Obsidian art project]], kind of.

It'd be nice to have my thoughts leave my brain instead of gathering dust here. This note will track the status of that project.

### Updates
- [[2024-05-29]]: Finished tagging entries A-B
- [[2024-05-30]]: Finished entries 0-9 and part of C.
- [[2024-05-31]]: Finished C-D and started on E!
- [[2024-06-04]]: Finished up thru I after a post work couch session of tagging.
- [[2024-06-05]]: Finished J-K on the train.
- [[2024-06-06]]: Finished 90% of the Ms (there are a lot)
- [[2024-06-07]]: Started O.
- [[2024-06-09]]: Cut down #maybepublish entries 40->24.
- [[2024-06-18]]: js I was done with up to "stuff you the reader". Finished S.
- [[2024-06-20]]: Got through part of T. There's a lot of "The" articles so I'll be at this letter a while ...
- [[2024-06-23]]: Finished T-U at the Commons!
    - I'm sensing many #publish articles that are incomplete. Rather than hold up publishing this vault until I fix them, I'll make a snap decision about publishing each, and append #needswork to any that, well, need work.
- [[2024-06-25]]: Finished midway through W, up to what makes a good recommendation engine.
    - My writing used to be phenomenal. Maybe it still is and I need to draw it out.
- [[2024-07-07]]: _Finished_ tagging all the entries at the Commons. Here's a snapshot of the stats:
    - #publish: 173 entries
    - #nopublish: 92 entries (wow, higher than I expected)
    - #maybepublish: 38 entries
    - #publishwhenready: 6 entries. Deprecated tag
    - #needswork: 66 entries
- [[2024-09-06]]: First working version of the note-copying code.
    - Noticed some bugs and added a section below to track them.
    - Needed to use `npm install --legacy-peer-deps` due to robots.txt plugin unable to resolve deps. See [this stackoverflow post](https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages)


### Test cases
- [[The internet game decathlon|The master decathlon]] - confirms that note aliases are working
- [[Types of financing]] - confirms that aliased links are working

### Known bugs / missing features
Last updated [[2024-09-06]]:
- The `%` character messes up links. For example, [[40% of VC spending goes to Google and Meta]] breaks.
- Embedded images don't exist
- "Random" page is not yet implemented
- The newline after "#publish"
- Need a `robots.txt`
- Stylesheet improvements
    - Should distinguish between outgoing link and one that keeps users within the Perdicis garden.
    - No stylesheets (though idk if I want any, some margin is probably enough)



### [[2024-05-26]]: OK, I'm actually going to do it.

OK, what would publishing actually look like
Previously I was using #nopublish.

Now:
- #publish ... I think publishing should be opt-in, and definitely not the default state of an article
- #maybepublish


Update ([[2024-05-23]]): Interesting idea from Dennis over dinner: what if I left my private files encrypted at rest? And give visitors a key to unscramble the files?
- If I don't use a fixed ciphertext length, it wouldn't mean extra loading times for users
- Main thing is just keeping it safe from scrapers.



## Technically speaking
[Quartz](https://quartz.jzhao.xyz/notes/showcase) has a collection of cool formats. These people seem to call their vaults "gardens" though.

Honestly, Quartz seems kind of slow. It'd be nicest to use something like gatsby.js to preload all the md content and display it on command, instead of loading as needed.

## Managing my private writing
I'd like to keep some of my thoughts unpublished until I feel ready to launch them. I will plan to tag such sensitive pages with \#nopublish.

## Misc
### Navigating a graphlike site is hard
So what if I had the main site page randomly pluck 3 entries for someone to start from?

Maybe allowing search-by-tags.

## To-dos
Some housekeeping is in order before I publish. Specifically:
- [ ] Tag all private entries with \#nopublish.
- [ ] Tag philosophy articles with \#philosophy.
- [ ] Untag articles with \#idea (did I really think that was a good idea).

^ As of [[2024-05-23]] this is not done lol.

As of [[2022-06-21]] it seems I may actually do this as part of [[Perdicis website]]! See To-dos section. 

