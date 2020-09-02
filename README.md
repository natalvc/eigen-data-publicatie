# Eigen data publicatie test

## Algemeen

De data werd gepubliceerd vanuit Geoloket.
Gegenereerde HTML werd in index.html geplakt.

### Opstarten

Genereer een self signed certificate (server.key en server.cert) via  

```openssl req -nodes -new -x509 -keyout server.key -out server.cert```

Dan 

```
  npm install
  node index.js
```
   
Ga naar https://apps-local.mow.vlaanderen.be/

Start chrome op met parameter --ignore-certificate-errors om invalid certificate warning niet te krijgen.
Bvb /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors
