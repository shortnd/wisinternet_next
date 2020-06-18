export default (req, res) => {
    if (req.method == 'POST') {
        res.statusCode = 200
        res.json({ message: 'posted' })
    } else {
        res.statusCode = 200;
        res.json({ message: 'get' })
    }
}
