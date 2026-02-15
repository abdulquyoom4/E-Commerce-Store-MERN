import contact from '../model/contact.model.js';

export const Contact = async (req, res) =>{
    const {name, email, message} = req.body;
    try{
        const newContact = new contact({name, email, message});
        await newContact.save();
        res.status(200).json({message: 'Message sent successfully'});
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await contact.find();
        res.status(200).json({messages});
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }};