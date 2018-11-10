in ext-component-creator

npm install
get *-all-classes-flatten.json (from sdk build) and copy to ./AllClassesFiles
node run.js

node all.js angular modern (classic as well)
  create ./GeneratedFolders/ext-angular-modern/src/lib
  copy files in ext-all-stuff to ext-angular-modern
  generate files in ./GeneratedFolders/ext-angular-modern/src
  generate files in ./GeneratedFolders/ext-angular-modern/src/lib (1 per widget)

run npm install in ./GeneratedFolders/ext-angular-modern
run npm run build in ./GeneratedFolders/ext-angular-modern

demo app in ext-angular-demo (sues ext-angular module - commented out initially in ./src/app/app.module.ts)






****************************
old stuff...
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
