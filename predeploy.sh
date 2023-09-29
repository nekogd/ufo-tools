# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
cp -v build/static/js/main.*.js build/static/js/main.js
#find build/static/js -name "main.*.js" -exec mv '{}' build/static/js/main.js \;