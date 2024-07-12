const {
    getPharmacies,
    getPharmaById,
    createPharma,
    updatePharma,
    getPharmaciesbyname,
    deletepharmacy,
    getMedicinesbyPharma
} = require('./pharma.services');


const getPharmaController = async (req, res) => {
    try {
        const pharma = await getPharmacies();
        return res.status(200).json({ pharma });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//not using right now 
const getPharmaByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const pharma = await getPharmaById(id);
        if (pharma) {
            return res.status(200).json({ pharma });
        }
        return res.status(404).send('Pharma with the specified ID does not exists');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const createPharmaController = async (req, res,next) => {
    try {
        const pharma = await createPharma(req.body);
        return res.status(201).json({
            pharma
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getPharmaciesbynameController = async (req, res) => {
    try {
        const { pharmaName } = req.params;
        const pharma = await getPharmaciesbyname(pharmaName);
        if (pharma) {
            return res.status(200).json({ pharma });
        }
        return res.status(404).send('Pharma with the specified name does not exists');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updatePharmaController = async (req, res,next) => {
    try {
        const { id } = req.params;
        const [pharma] = await updatePharma(id, req.body);
        if (pharma) {
            return res.status(200).json({ pharma });
        }
        return res.status(404).send('Pharma with the specified ID does not exists');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletePharmaController = async (req, res,next) => {
    try {
        const { id } = req.params;
        const pharma = await deletepharmacy(id);
        if (pharma) {
            return res.status(200).json({ pharma });
        }
        return res.status(404).send('Pharma with the specified ID does not exists');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}   

const getMedicinesbyPharmaController = async (req, res) => {
    try {
        const { pharmaId } = req.params;
        const medicines = await getMedicinesbyPharma(pharmaId);
        if (medicines) {
            return res.status(200).json({ medicines });
        }
        return res.status(404).send('Medicines with the specified pharmaId does not exists');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getPharmaController,
    getPharmaByIdController,
    getPharmaciesbynameController,
    createPharmaController,
    updatePharmaController,
    deletePharmaController,
    getMedicinesbyPharmaController
}