PROJECT=angular-base
JAVASCRIPT_DIR=./js
CSS_DIR=./css
STYLUS=./node_modules/.bin/stylus
NIB=./node_modules/nib/lib/nib
COMPONENT_BUILD=./node_modules/.bin/component-build
COMPONENT_INSTALL=./node_modules/.bin/component-install

build: public/application.css public/application.js

public/application.css: css/*
	@$(STYLUS) $(CSS_DIR) --out public --include-css -c --use $(NIB)

public/application.js: js/*.js js/**/*.js
	@$(COMPONENT_BUILD) --dev --out public -n application -v 
	@echo "require('angular-base/js/index.js');" >> public/application.js