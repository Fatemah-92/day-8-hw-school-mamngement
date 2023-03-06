import { Router } from "express";
import { addClassroom, getClassrooms, getClassroomById } from "../controller/classroom.controller";
import validate from "../middleware/validate";
import { ClassroomType } from "../schema.zod/classroom.zod";

const route = Router()

// 1. Add Classroom
route.post('/', validate(ClassroomType), addClassroom);

// 2. Get Classrooms
route.get('/', getClassrooms);

// 3. Get Classroom by id
route.get('/:id', getClassroomById);

export default route;