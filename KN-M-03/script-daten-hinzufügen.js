//use MusicSchoolDB;

const schoolId = new ObjectId();
const teacherId1 = new ObjectId();
const teacherId2 = new ObjectId();
const studentId1 = new ObjectId();
const studentId2 = new ObjectId();
const studentId3 = new ObjectId();
const classRoomId1 = new ObjectId();
const classRoomId2 = new ObjectId();
const instrumentId1 = new ObjectId();
const instrumentId2 = new ObjectId();
const instrumentId3 = new ObjectId();

db.MusicSchool.insertOne({
    _id: schoolId,
    name: "Adliswil Musikschule",
    teacher_id: [teacherId1, teacherId2],
    address: "Adliswil 8134, Zürich",
});

db.Teacher.insertMany([
    {
        _id: teacherId1,
        name: "Herr Sacha",
        email_address: "hello@gmail.com",
        days_available: [new Date("2024-03-25T00:00:00Z"), new Date("2024-03-28T00:00:00Z")],
        Classroom: {
            _id: classRoomId1,
            classRoom_number: 205
        }
    },
    {
        _id: teacherId2,
        name: "Herr Pascal",
        email_address: "hallo@gmail.com",
        days_available: [new Date("2024-03-26T00:00:00Z"), new Date("2024-03-29T00:00:00Z")],
        Classroom: {
            _id: classRoomId2,
            classRoom_number: 105
        }
    }
]);

db.Student.insertMany([
    {
        _id: studentId1,
        teacherId: teacherId1,
        name: "Alissa",
        age: 14,
        email_address: "student1@gmail.com",
        lesson_date: {
            "$date": "2024-03-25T00:00:00Z"
        },
        instrument: {
            _id: instrumentId1,
            name: "Klarinette"
        }
    },
    {
        _id: studentId2,
        teacherId: teacherId2,
        name: "Benjamin",
        age: 16,
        email_address: "student2@gmail.com",
        lesson_date: {
            "$date": "2024-03-26T00:00:00Z"
        },
        instrument: {
            _id: instrumentId2,
            name: "Gitarre"
        }
    },
    {
        _id: studentId3,
        teacherId: teacherId1,
        name: "Anna",
        age: 15,
        email_address: "student3@gmail.com",
        lesson_date: {
            "$date": "2024-03-28T00:00:00Z"
        },
        instrument: {
            _id: instrumentId3,
            name: "Klavier"
        }
    }
]);

print("successfully inserted data");
