# My terminal setup
#publish 
Opened [[2024-04-12]]. Although this is mostly from September 24, 2018... wow

Basic setup is iTerm 2 + zsh. I also added:

* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) <- super popular framework for managing your zsh configuration
* [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) <- just what it sounds like
* [spaceship-prompt](https://github.com/denysdovhan/spaceship-prompt) <- awesome theme for zsh
* [onedark.vim](https://github.com/joshdick/onedark.vim) <- OneDark theme for the whole shell, not just vim
* [FiraCode font](https://github.com/tonsky/FiraCode) <- monospaced font with programming ligatures

I use the [basic .vimrc](https://github.com/amix/vimrc/blob/master/vimrcs/basic.vim) but added 2 extra lines:

```
set number (to show line numbers)

set ttyfast (to scroll faster)
```
Also, I installed [vim-plug](https://github.com/junegunn/vim-plug) to manage my vim plugins:

* [vim-polyglot](https://github.com/sheerun/vim-polyglot) <- a collection of language packs for Vim

And I also installed OneDark color theme from the theme I linked above.

Lastly, in my .zshrc:

```
alias ll="ls -alh"
```
