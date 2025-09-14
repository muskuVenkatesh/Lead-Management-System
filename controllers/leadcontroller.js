const Lead = require('../models/Lead.js');

// Create Lead


    const createLead =async (req, res) => {
        try {
            const { name, email, phone, message } = req.body;

            if (!name || !email) {
                return res.status(400).json({ success: false, error: 'Name and email are required' });
            }

            const newLead = new Lead({
                name,
                email,
                phone,
                message
            });

            const savedLead = await newLead.save();  // Proper async save

            return res.status(201).json({ success: true, data: savedLead });
        } catch (error) {
            console.error('Lead creation error:', error);
            return res.status(500).json({ success: false, error: 'Server error' });
        }
    };


const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();

        if (!leads || leads.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No leads found'
            });
        }

        return res.status(200).json({
            success: true,
            data: leads
        });

    } catch (error) {
        console.error('Error fetching leads:', error);
        return res.status(500).json({
            success: false,
            error: 'Server error while fetching leads'
        });
    }
};


module.exports = { createLead,getLeads };

