Crux: installable version
=========================

Host it on Netlify (free)
1. Unzip this file.
2. Go to Netlify's drag-and-drop deploy ("Netlify Drop") and drop the whole
   unzipped folder onto it. index.html must be at the top level of what you
   upload. Netlify may ask you to sign up so the site does not expire; a
   free account is enough.
3. Open the address Netlify gives you in Chrome on your Android phone.
4. Chrome menu (three dots) > Install app.

Moving your log from the claude.ai version
- In the claude.ai version: Settings > Export backup.
- In the installed app: Settings > Import backup, and pick that file.
  Importing merges into what is already there.

Notes
- Your log is stored on the phone only. Use Settings > Export backup now and
  then to keep a copy.
- The in-app AI coach and the Ask a question box need Claude, so they only
  appear in the claude.ai version. In this version use Progress > Review in a
  Claude chat: copy the request, paste it into a Claude chat (turn on web
  search for research), then paste the reply back to see the review and apply
  changes. "Copy my log to ask a question" does the same for free-form
  questions. Everything else works here, offline too.
- Updating: when you upload newer files, change CACHE='crux-v4' to crux-v5
  (then v6, ...) in sw.js first, so phones pick up the new version.
- fonts/ contains Bricolage Grotesque (SIL Open Font License, see the licence
  file there).
