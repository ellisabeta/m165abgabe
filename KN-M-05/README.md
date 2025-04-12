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

**Backup Variante 1:**  
Screenshot of the created snapshot status:  
- ![screenshot](./images/snapshot-completely-created.png)

Deleted collection from MusicSchoolDB in Compass MongoDB:
- ![screenshot](./images/deletedCollectionViaShell.png)  

Detached old volume and attached newly restored volume to instance:
- ![screenshot](./images/attachedNewVolume.png)  
Restored Collection of Teacher:
- ![screenshot](./images/restoredTeacherCollection.png)  

The only command used was ```db.Teacher.drop()`` and everything else was done through AWS Console.

**Backup Variante 2:**  
Here i connected myself to the EC2 and created a **MongoDump**:

![screenshot](./images/cmd-created-mongodump.png)   
![screenshot](./images/deletedCollectionStudent.png)  

Using this command i restored the DB through the terminal:  
``mongorestore --host 18.211.87.89 --port 27017 --username writeUser --password writePassword --authenticationDatabase admin --db MusicSchoolDB "C:\Users\lizak\backup-KN05-m165\MusicSchoolDB"``  

![screenshot](./images/restoredMusicSchoolDB.png)

### Abgabe Aufgabe C  
Difference between Replication and Partition (Shards):  
**Replication** means having one server or a db and then one more server or db which is a duplication of the first one. Because that means if the first one collapses or goes down, the second one that was there as a backup will be used. So the same data is stored in both versions.

**Partition (sharding)** means splitting the data. It's data being split into smaller pieces, which is 
called **shards** across different servers. The data is different in all servers so there is no second duplicated object in sharding that contains the same data, it's all different.  

For the company, if Accenture uses Replication, then it's a better choice to choose Partition, because the data increases, which would be better to be stored as shards so the Partitioning way. Data will be scaled horizontally. 
