import { Router } from "express";
import { addTeacher, getTeachers, getTeacherById } from "../controller/teacher.controller";
import validate from "../middleware/validate";
import { TeacherType } from "../schema.zod/teacher.zod";

const route = Router()

// 1. Add Teacher
route.post('/', validate(TeacherType), addTeacher);

// 2. Get Teachers
route.get('/', getTeachers);

// 3. Get Teacher by id
route.get('/:id', getTeacherById);

export default route;