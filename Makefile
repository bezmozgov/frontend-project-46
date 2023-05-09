install:
	npm ci

test:
	npm test

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run
