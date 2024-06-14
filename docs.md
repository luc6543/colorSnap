# Documentatie

## Opslaan 
- 1
aangezien savedInt een variable is die alleen maar het aantal saved foto's laat zien en niet de hoeveelheid legen rijen kan het zijn dat savedInt 9 is terwijl de foto met id 4 verwijdered is, als de (nietbestaande) foto met index 4 dan benaderd word word er een lege string terug gegeven, hierdoor ontsaat er een error. Dezer error word gestopt door van te voren te checken of item niet leeg is via if(item)


## Foto opslaan

### saveImage()
Save image functie krijgt een aantal variable mee.
Eerst word de gegeven url omgezet naar base64 via de functie toDataURL()
de toDataURL() is een lange functie en daarom word er gebruik van .then gemaakt

Zodra de image naar base64 wordt omgezet wordt alle data
van de image opgeslagen in een Array. 
deze array word naar saveToLocal gestuurd


### saveToLocal()

#### herhaling check
via getsavedint wordt het aantal opgeslagen fotos opgehaald en via een for loop
wordt er doorheen geloopt.
alle foto's die zijn opgeslagen worden gepakt en gecheckt of die bestaan
en gecheckt of de eerste 1000 chars van de images gelijk zijn.

Hoezo doet die dat? omdat je niet repeating images in de saved wil hebben, dit
is NIET een bug, dit is een feature. dit heb ik express gedaan.

als de eerste 1000 chars gelijk aan elkaar zijn word de oude foto verwijdered

#### goede index zoeken.
Omdat je images kan verwijderen kan er een lege index in de saved zitten
1, 2, 4, 5 (zoals dit, img met index 3 is verwijdered).


eerst word gekeken of de savedInt index vrij is. zo niet word via de functie getEmpty de eerste lege index gepakt en doorgegeven. deze index wordt dan gevuld met saveArray.

