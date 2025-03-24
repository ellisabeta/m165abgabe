// use MusicSchoolDB;

db.Teacher.updateOne(
    { _id: teacherId1 },
    { $set: { email_address: "updatedEmail@gmail.com" } }
)

db.Student.updateMany(
{
    // Anna or Benjamin students
    $or: [ { age: { $lt: 15 } }, { name: "Benjamin" }] 
},
{ $set: { instrument: { name: "Piano" } } }
)

db.MusicSchool.replaceOne(
    { _id: schoolId },
    {
        name: "Langnau Musik Schule",
        address: "Langnau Zürich",
        teacherId: [teacherId1, teacherId2]
    }
)

print("Updated the collections successfully")
