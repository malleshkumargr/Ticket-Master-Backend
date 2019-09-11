const Customer = require('../models/customer')

//list
module.exports.list = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}

//create
module.exports.create = (req, res) => {
    const { body } = req
    const customer = new Customer(body)
    customer.save()
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

//show
module.exports.show = (req, res) => {
    const { id } = req.params
    Customer.findById(id)
        .then((customer) => {
            if(customer){
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//update
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((customer) => {
            if(customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
           res.json(err)
        })
}

//destroy
module.exports.destroy = (req, res) => {
    const { id } = req.params
    Customer.findByIdAndDelete(id)
        .then((customer) => {
            if(customer){
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}