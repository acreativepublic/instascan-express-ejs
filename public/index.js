var Instascan = require('instascan');


var maindiv = document.createElement("div");
maindiv.id = "app";

var sidebardiv = document.createElement("div");
sidebardiv.classList.add("sidebar");


var camsection = document.createElement("section");
camsection.classList.add("cameras");

var camshead = document.createElement("H2");
camshead.innerHTML = "Cameras";

var ulone = document.createElement("ul");

var lione = document.createElement("li");
lione.id = "lione";

var litwo = document.createElement("li");
litwo.id = "litwo";

var spanone = document.createElement("span");
spanone.id = "spanone";

var spantwo = document.createElement("span");
spantwo.id = "spantwo";


var scanssection = document.createElement("section");
scanssection.classList.add("scans");

var scanshead = document.createElement("H2");
scanshead.innerHTML = "Scans";

var ulonescans = document.createElement("ul");

var lionescans = document.createElement("li");
lionescans.id = "lionescan";

var litwoscans = document.createElement("li");
litwoscans.id = "litwoscan";

var previewdiv = document.createElement("div");
previewdiv.classList.add("preview-container");



var insta = document.createElement("video");
insta.id = "preview";




camsection.appendChild(camshead);
camsection.appendChild(ulone);

ulone.appendChild(lione);
ulone.appendChild(litwo);

litwo.appendChild(spanone);
litwo.appendChild(spantwo);



scanssection.appendChild(scanshead);
scanssection.appendChild(ulonescans);

ulonescans.appendChild(lionescans);
ulonescans.appendChild(litwoscans);


sidebardiv.appendChild(camsection);
sidebardiv.appendChild(scanssection);

previewdiv.appendChild(insta);

maindiv.appendChild(sidebardiv);
maindiv.appendChild(previewdiv);

document.body.appendChild(maindiv);

 /*

 let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
spanone.innerHTML.add(camera.name);
spanone.title.add(camera.name);
lionescans.innerHTML.add(scan.content);
lionescans.title = scan.content
});

scanner.addListener('scan', function (content) {
  console.log(content);
});

*/



mounted: function () {
   var self = this;
   self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });
   self.scanner.addListener('scan', function (content, image) {
     self.scans.unshift({ date: +(Date.now()), content: content });
   });
   Instascan.Camera.getCameras().then(function (cameras) {
     self.cameras = cameras;
     if (cameras.length > 0) {
       self.activeCameraId = cameras[0].id;
       self.scanner.start(cameras[0]);
     } else {
       console.error('No cameras found.');
     }
     spanone.innerHTML = camera.name;
     spanone.title = camera.name;
     lionescans.innerHTML = (scan.content);
     lionescans.title = (scan.content);

   }).catch(function (e) {
     console.error(e);
   });

 methods: {
   formatName: function (name) {
     return name || '(unknown)';
   },
   selectCamera: function (camera) {
     this.activeCameraId = camera.id;
     this.scanner.start(camera);
   }
 }
};
