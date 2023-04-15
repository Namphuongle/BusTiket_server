

create = async (req, res, next) => {
    res.send({
        message: "create handler"
    })
}

module.exports = {
    create
}