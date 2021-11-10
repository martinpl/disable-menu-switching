UUID = disable-menu-switching@selfmade.pl
FILES = metadata.json extension.js

_build:
	-rm -fR ./_build
	mkdir -p _build
	cp $(FILES) _build

zip: _build
	cd _build ; \
	zip -qr "$(UUID).zip" .
	mv _build/$(UUID).zip ./
	-rm -fR _build