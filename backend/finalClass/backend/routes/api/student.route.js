import express from 'express'
import { Student } from '../../models/student.model.js'
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const studentData = await Student.find()
        res.status(200).json({
            success: true,
            data: studentData
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, phone, section } = req.body
        const studentData = await Student.create({
            name: name,
            phone: phone,
            section: section
        })
        res.status(201).json({
            success: true,
            data: studentData
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const studentData = await Student.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Record Deleted'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const { name, phone, section } = req.body

        const updateData = {}

        if (name !== undefined) updateData.name = name
        if (phone !== undefined) updateData.phone = phone
        if (section !== undefined) updateData.section = section

        const studentData = await Student.findByIdAndUpdate(req.params.id, updateData, { new: true })
        res.status(201).json({
            success: true,
            data: studentData
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

export default router