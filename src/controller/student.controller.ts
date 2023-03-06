import {prisma} from "../config/db";
import {Request, Response } from "express";

// 1. Add Student
export const addStudent = async(req: Request, res: Response)=> {
    const student = await prisma.student.create({
        data: req.body
        , select: {
            classroom: true
        }
    })
    res.json({"message": "Student Created !", "Student": student})
}

// 2. Get Students
export const getStudents = async(req: Request, res: Response)=> {
    const students = await prisma.student.findMany({
        select: {
            // id: true,
            name: true,
            age: true,
            major: true,
            classroom: true
        }
    })
    try {
        if(students)
        res.json({"Students List": students})
    } catch (error) {
        res.json(error)
    }
}

// 3. Get Student by id
// Create endpoint that takes student id and return one student (return bad request if student id is invalid)
export const getStudentById = async(req: Request, res: Response)=> {
    const student = await prisma.student.findFirst({
        where: {
            id: req.params.id
        },
        select: {
            id: true,
            name: true,
            age: true,
            major: true,
            classroom: true
        }
    })
    try {
        if(student)
        res.json({"Student": student})
    } catch (error) {
        res.json(error)
    }
}