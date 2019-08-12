# ext-angular-grid

cd ~/_git/sencha/ext-allshared/generators/grid
npm run packagr
cp -R assets/ dist/assets/
cd dist
npm pack
npm install ../sencha-ext-angular-grid-7.0.0.tgz
npm install http-server

cp -R  ./sencha-ext-angular-grid-7.0.0.tgz   ../../../../ext-angular/packages/

cp -R  ./sencha-ext-angular-grid-7.0.0.tgz   /Volumes/BOOTCAMP/aaPlayground/


in ~/_git/sencha/ext-angular/packages/ewc-cli

npm install ../sencha-ext-angular-grid-7.0.0.tgz

    "http-server": "^0.11.1",
    "http": "npx http-server dist/zzz -g -o",
