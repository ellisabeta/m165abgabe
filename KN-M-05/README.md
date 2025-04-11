## KN05 Administration von MongoDB

### Abgabe Aufgabe A
Encountering an error when adjusting authSource with a different DB:
![screenshot](./images/ErrorAuthSourceDifferentDB.png)

Here is my [script](createNewUsersForDBs.js) to create the two users with different rights (read and write) and also the commands to read and write in collections.  

Screenshots with **Reader User**:  
Authenticating with reader rights:  
- ![screenshot](./images/successfulAuthenticationWithReader.png)  

Finding Teacher with reader rights:  
- ![screenshot](./images/readerUserSuccessfullyReadRight.png)  

Inserting with reader rights:  
- ![screenshot](./images/readerUserFailedWriteRight.png)

Screenshots for **Writer User**:  
Authenticating with writer rights:  
- ![screenshot](./images/successfulAuthenticationWithWriterUser.png)  

Finding Teacher with reader rights:  
- ![screenshot](./images/writerUserSuccessfullyRead.png)  

Inserting with reader rights:  
- ![screenshot](./images/writerUserSuccessfullyInserts.png)

### Abgabe Aufgabe B  
