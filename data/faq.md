---
title: FAQ
description: Frequently Asked Questions about the Music Player for Reddit
keywords: faq, questions, help, free, open source, music, player, web
template: page.pug
---


@ jumbo
---
title: frequently asked questions
---
1. [The music stops playing frequently](#music-stops)
1. [What keyboard shortcuts are there? ](#shortcut)
1. [How about media keys? ](#media)
@ end

@ music-stops
---
title: The music stops playing frequently
css: left dark
---
### Issue

Chrome is no longer automatically playing songs when a tab is in the background. Some songs do still play automatically.

The songs **do** play automatically if the current song is from YouTube and the next song is from YouTube as well. But if the current song is from SoundCloud and the next one is from YouTube you will still need to place the tab in focus to play the next song.

### Solutions

This is not the case in Safari and Firefox on desktop so in the meantime I'll advise you to use those.

You can now disable this feature on Chrome here:

1. Copy paste this in your address bar: `chrome://flags/#disable-gesture-requirement-for-media-playback`
2. Click on *Enable*

@ end

@ shortcut
---
title: What keyboard shortcuts are there?
---
Key | Function
---- | ---------
Ctrl + Space | Play / Stop
Ctrl + Up Arrow| Previous Song
Ctrl + Left Arrow | Previous Song
Ctrl + Down Arrow | Next Song
Ctrl + Right Arrow | Next Song
@ end

@ media
---
title: How about media keys?
css: dark
---
This is not possible without an extension, Streamkeys is a good extension for Chrome.

* Streamkeys
@ end
