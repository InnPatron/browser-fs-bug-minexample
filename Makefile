build: src/setup.js src/page.html
	mkdir -p ./build
	browserify src/setup.js -o build/setup.js
	cp src/page.html build/page.html

clean:
	rm -r ./build
