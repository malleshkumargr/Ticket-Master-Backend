const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    createdAt: {
        type: Date,
        default: Number(new Date())
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    employees: [{ _id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    }
    }],
    message: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    isResolved: {
        type: Boolean,
        default: false
    },
    code: {
        type: String,
        required: true
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket
