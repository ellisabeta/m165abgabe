// use MusicSchoolDB;

db.MusicSchool.find(
    { name: { $regex: "Musik" } }
).forEach(printjson);

db.Teacher.find({
        $or: [ {name: "Herr Sacha"}, {name: "Herr Pascal"} ]
    },
    { email_address: 1, name: 1 }
).forEach(printjson);

db.Student.find(
    { age: 14, "instrument.name": "Klarinette" },
    {_id: 0, name: 1}
).forEach(printjson);

db.Student.find(
    { lesson_date: { $gte: new Date("2024-03-26T00:00:00Z") } }
).forEach(printjson);

print("Called all queries successfully")
