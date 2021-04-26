const posts = ({axios}) => ({
    post: async (req, res) => {
        const {data:users} = await axios.get('https://jsonplaceholder.cypress.io/users');
        const found = users.find( x => x.id === req.body.userId);
        if(found){
            const {data} = await axios.post('https://jsonplaceholder.cypress.io/posts', req.body);
            return res.status(201).send(data);
        }
        res.sendStatus(400);
    }
})

module.exports = posts;