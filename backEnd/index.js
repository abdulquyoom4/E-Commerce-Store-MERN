import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import itemRoute from './route/item.route.js'
import userRoute from './route/user.route.js'
import contactRoute from './route/contact.route.js'
import orderRoute from './route/order.route.js'

const port = process.env.PORT || 3000;

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors());


try {
    mongoose.connect(process.env.MONGOURI);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log("Error: ", error);
}

app.use('/items', itemRoute);
app.use('/user', userRoute);
app.use('/contact', contactRoute);
app.use('/order', orderRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
