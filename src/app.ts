import express, { Application }  from "express";
import {connectDB} from './config/db'

import classroomRoute from "./routes/classroom.route";
import studentRoute from "./routes/student.route";
import teacherRoute from "./routes/teacher.route";

const app: Application = express()
const PORT = 3000;

connectDB()

app.use(express.json());
app.use('/student', studentRoute);
app.use('/classroom', classroomRoute);
app.use('/teacher', teacherRoute);

app.listen(PORT, ()=> console.log(`express started on port: ${PORT}`));
