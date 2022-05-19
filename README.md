1. Yarn installieren
https://classic.yarnpkg.com/lang/en/docs/install/
2. Terminal öffnen
3. In einen Ordner hineingehen, wo man Projekte abspeichert. Ich persönlich habe meistens einen Ordner namens "workspace", wo ich alle meine Projekte speichere.
4.  Im Ordner diesen Befehl ausführen:

        git clone https://github.com/Metaphysiker/vegan-cypress.git

5. Dieser Befehl erstellt einen neuen Ordner. In den Ordner hineingehen.

        cd vegan-cypress
6. Diesen Befehl ausführen:

        yarn install

7. Dieser Befehl installiert Cypress, ein Tool um Webseiten zu testen. Cypress startet man so:

        yarn run cypress open

8. Cypress öffnet ein Fenster. Auf "basic-check.spec.js" klicken und der Test beginnt.
