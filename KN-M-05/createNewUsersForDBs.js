// use MusicSchoolDB;

db.createUser({
    user: "readUser",
    pwd: "readPassword",
    roles: [{ role: "read", db: "MusicSchoolDB" }]
})

db.Teacher.findOne({ name: "Herr Sacha" });
db.Teacher.insertOne({test: "testInserting"});

// use admin;

db.createUser({
    user: "writeUser",
    pwd: "writePassword",
    roles: [{ role: "readWrite", db: "MusicSchoolDB" }]
})

db.Teacher.findOne();
db.Teacher.insertOne({test: "testInserting"});
