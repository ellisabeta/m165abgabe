// use MusicSchoolDB;

const teacher = db.Teacher.findOne({ name: "Herr Sacha" }); 

const studentsOfSacha = db.Student.aggregate([
    { $match: { teacherId: teacher._id} },
    { $project: {name: 1, _id: 0} }
]).toArray();
print("Students of Herr Sacha:", JSON.stringify(studentsOfSacha, null, 2));

const studentsAbove15 = db.Student.aggregate([
    {
        $match: { age: { $gte: 15 } }
    },
    {
        $project: {
            name: 1,
            age: 1,
            instrumentName: "$instrument.name",
            teacherId: 1
        }
    },
    { $sort: { age: 1 } }
]).toArray();
print("Students age >= 15:", JSON.stringify(studentsAbove15, null, 2));

const groupedStudents = db.Student.aggregate([
    {
        $group: {
            _id: "$teacherId",
            totalAge: { $sum: "$age" },
            count: { $sum: 1 }
        }
    }
]).toArray();
print("Grouped students:", JSON.stringify(groupedStudents, null, 2));
