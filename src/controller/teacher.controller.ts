import {prisma} from "../config/db";
import {Request, Response } from "express";

// 1. Add Teacher
export const addTeacher = async(req: Request, res: Response)=> {
    const {name} = req.body;
    const teacher = await prisma.teacher.create({
        data: {
            name
        },
        select: {
            name: true,
            classroom: {
                select: {
                    name: true
                }
            }
        }
    })
    res.json({"message": "Teacher Created !", "Teacher": teacher})
}

// 2. Get Teachers
export const getTeachers = async(req: Request, res: Response)=> {
    const teachers = await prisma.teacher.findMany({
        select: {
            id: true,
            name: true,
            classroom: {
                select: {
                    name: true
                }
            }
        }
    })
    try {
        if(teachers)
        res.json({"Teachers List": teachers})
    } catch (error) {
        res.json(error)
    }
}

// 3. Get Teacher by id
// Create endpoint that takes teacher id and return one teacher (return bad request if teacher id is invalid)
export const getTeacherById = async(req: Request, res: Response)=> {
    const teacher = await prisma.teacher.findFirst({
        where: {
            id: req.params.id
        },
        select: {
            name: true,
            classroom: {
                select: {
                    name: true
                }
            }
        }
    })
    try {
        if(teacher)
        res.json({"Teacher": teacher})
    } catch (error) {
        res.json(error)
    }
}