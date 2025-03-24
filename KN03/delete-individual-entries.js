// use MusicSchoolDB;

db.Teacher.deleteOne({_id: ObjectId("67e119078bcff1b137ad6d75")});
db.Student.deleteMany({
    $or: [
        { _id: ObjectId("67e119078bcff1b137ad6d77") },
        { _id: ObjectId("67e119078bcff1b137ad6d79") }
    ]
})

print("deleted iduvidual entries from collections")
