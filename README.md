# VR and AR lessons with Aframe.io

This repository contains information about creating offline versions of lessons that use Aframe.io

1. Install npm
2. Clone or download this repository
3. Open a terminal console window
4. Change to the directory that contains index.html
5. Type: npx nws -o

The index.html file should then open in a web browser.  The files in the directory are being served by a local web server, so images and objects will load properly without CORS errors.

If you are upgrading this repository to a new version of Aframe:

To find the latest version of Aframe, go to this site: https://github.com/aframevr/aframe/tree/master/dist

Then substitute the version number in the URLs below and download the code to your "vendor" subdirectory: 
https://github.com/aframevr/aframe/blob/master/dist/aframe-v1.0.4.min.js

https://github.com/aframevr/aframe/blob/master/dist/aframe-v1.0.4.min.js.map


If you are developing an Augmented Reality scene, also include the following:

https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js

Note: You may also want to include the following file, but it may no longer be needed: 

https://unpkg.com/aframe-seek-position-component/dist/aframe-seek-position-component.min.js
