import Order from '../model/order.model.js';


export const placeOrder = async (req, res) =>{
    const {name, email, phone, address, order} = req.body;
    try{
        const newOrder = new Order({name, email, phone, address, order});
        await newOrder.save();
        res.status(200).json({message: 'Order placed successfully'});
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export const getOrder = async (req, res) =>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}