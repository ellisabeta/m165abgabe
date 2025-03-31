// use MusicSchoolDB;

db.Student.aggregate([
    {
        $lookup: {
            from: "Teacher",
            localField: "teacherId",
            foreignField: "_id",
            as: "teacherDetails"
        }
    },
    { 
        $unwind: "$teacherDetails"
    },
    {
        $project: {
            _id: 0,
            studentName: "$name",
            studentAge: "$age",
            teacherName: "$teacherDetails.name",
            teacherEmail: "$teacherDetails.email_address",
            instrument: "$instrument.name"
        }
    },
    { 
        $match: { studentAge: { $gte: 15 } }
    },
    {
        $group: {
            _id: "$teacherName",
            totalStudents: { $sum: 1 },
            students: { $push: "$studentName" }
        }
    }
]).toArray();
