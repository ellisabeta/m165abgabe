## KN03 Datenmanipulation und Abfragen 1

### Abgabe Aufgabe A
Here is the script to **insert** the data into the db: [script](script-daten-hinzufügen.js)  
These are screenshots to show that the commands worked and showed that the data was inserted. Also a screenshot to show that the data is set in a collection:
![screenshot](./images/mongosh-commands-output.png)
![screenshot](./images/Student-Collection-Data.png)

### Abgabe Aufgabe B
This is the script to **delete** only the collections from the db: [deleteCollections](delete-whole-collection.js)
Thats the output when i run it in mongosh. As you can see the MusicSchoolDB is empty:
![screenshot](./images/delete-commands-each-collection.png)

Thats the output of the commands that individual entries are deleted in mongosh:
![screenshot](./images/delete-individual-entries-commands.png)
![screenshot](./images/student-collection-output.png)

### Abgabe Aufgabe C
Here is the script to **query** through the database collections: [script](select-data-from-collection.js)
Thats the output that when i do .find() commands it shows the entries from the db:
![screenshot](./images/quering-through-the-collections.png)

### Abgabe Aufgabe D
Here is the script to **update** the collections: [script](update-queries.js)
Thats the output as in commands and the picture:
![screenshot](./images/commands-to-update.png)
![screenshot](./images/updatedSchool.png)
