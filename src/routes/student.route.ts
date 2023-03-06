import { Router } from "express";
import { addStudent, getStudents, getStudentById } from "../controller/student.controller";
import validate from "../middleware/validate";
import { TeacherType } from "../schema.zod/teacher.zod";

const route = Router()

// 1. Add Student
route.post('/', validate(TeacherType), addStudent);

// 2. Get Students
route.get('/', getStudents);

// 3. Get Student by id
route.get('/:id', getStudentById);

export default route;