const mongoose = require ("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const studentSchema = mongoose.Schema(
  {
    studentId: {type: String, required: true, unique: true},
    studentName: {type: String, required: true},
    profilePic: {type: String},
    email: {type: String, required: true},
    gender: {type: String, required: true},
    location: {type: String, required: true},
    class: {type: Number, required: true},
    stream: {type: String, required: true},
    subjects: { type: [String]}
  }
  ,
  { collection : 'Student' }
);

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Student', studentSchema);

