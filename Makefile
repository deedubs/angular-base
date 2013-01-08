PROJECT=angular-base
JAVASCRIPT_DIR=./js
CSS_DIR=./css
STYLUS=./node_modules/.bin/stylus
NIB=./node_modules/nib/lib/nib
COMPONENT_BUILD=./node_modules/.bin/component-build
COMPONENT_INSTALL=./node_modules/.bin/component-install

build: public/index.css public/index.js

public/index.css: css/*
	@$(STYLUS) $(CSS_DIR) --out public/css --include-css -c --use $(NIB)

public/index.js: js/*.js* js/**/*.js*
	@$(COMPONENT_BUILD) --dev --out public/js -n index -v 
	@echo "require('angular-base/js/index.js');" >> public/js/index.js