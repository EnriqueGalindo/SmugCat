##To Start
First install mongodb and start mongo

Second run npm install (if that doesnt work delete the node_modules folder and run yarn install)

Third copy the .env.example file contents to a .env file you will need to create.

##How to handle authenticating paths

on the front end when you want to make sure only authenticated users can access a route use the withAuth component

    <Route path="\" component={withAuth(Component)}>

on the back end when you want to protect a route you do

    router.get('/checktoken', withAuth, (err, res) => {res.sendStatus(200)})

