ln -s /Users/marcgusmano/aaExt/ext-6.5.3 ext



in ext-angular-generator

npm i
get *-all-classes-flatten.json
node all.js angular modern
node all.js classic
copy files in ext-all-stuff to ext-angular-modern

cd ext-angular-modern

npm i
gulp lib
gulp main
//gulp exp
npm version patch
npm publish

cd ..

cd ext-angular-classic
npm i
gulp lib
gulp exp
npm version patch
npm publish

cd ..

cd ext-angular-demos
npm i
npm version patch
npm publish
