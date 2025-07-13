# FDND Programma
It's our program website showing an overview of our curriculum divided in semesters and sprints.

## Archiveren programma.fdnd.nl

- [ ] branch aanmaken: archive-program-2526  
- [ ] Modify app.html `<html class=“archive”>`  
- [ ] Modify svelte.config.js

```
adapter-staticconst config = { 	kit: {
		adapter: staticAdapter({strict: false})
	}
};
```

- [ ] `npm run build`
- [ ] place files from build folder into thr root folder, delete all other files
- [ ] Add Netlify url pointing at the GitHub branch: _2526-programma-fdnd_
- [ ] Add DNS pointer from Netlify url to _2526.programma.fdnd.nl_
