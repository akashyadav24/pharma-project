const {
    Pharma,
    Medicine
} = require('./pharma.modal');

async function createPharma(pharmaData){
    try{
        const findPharma = await Pharma.findOne({name: pharmaData.name});
        if(findPharma){
            throw new Error('Pharma already exists');
        }
        const pharmaId = Math.floor(100000 + Math.random() * 900000);
        console.log('pharmaId', pharmaId);
        pharmaData = {...pharmaData, "pharmaId" :  pharmaId};
        console.log('pharmaData bfore service', pharmaData);
        
        const pharma = await Pharma.create(pharmaData);
        console.log('pharma service', pharma);
        if(!pharma){
            throw new Error('Pharma not created');
        }
        return pharma;
    }
    catch(err){
        console.log(err);
       
    }
}

async function getPharmacies(){
    try{
        const pharmaciesdata = await Pharma.find();
        console.log('pharmaciesdata service', pharmaciesdata.length);
        if(!pharmaciesdata){
            throw new Error('No pharmacies found');
        }
        return pharmaciesdata;
    }
    catch(err){
        console.log(err);

    }
}

async function getMedicines(){
    try{
        const medicinesdata = await Medicine.find();
        console.log('medicinesdata service', medicinesdata);
        if(!medicinesdata){
            throw new Error('No medicines found');
        }
        return medicinesdata;
    }
    catch(err){
        console.log(err);
        
    }
}

async function getPharmaById(pharmaId){
    try{
        const pharma = await Pharma.findOne({pharmaId});
        console.log('pharma service', pharma);
        if(!pharma){
            throw new Error('No pharmacy found');
        }
        return pharma;
    }
    catch(err){
        console.log(err);
        
    }
}

async function getMedicinesbyPharma(pharmaId){
    try{
        const medicinesdata = await Pharma.find({pharmaId}, { medicines : 1, _id: 0 });
        console.log('medicinesdata service', medicinesdata);
        if(!medicinesdata){
            throw new Error('No medicines found');
        }
        return medicinesdata;
    }
    catch(err){
        console.log(err);
   
    }
}

async function updatePharma(pharmaId, pharmaData){
    try{
        const updatedPharma = await Pharma.findOneAndUpdate({pharmaId}, pharmaData, {new: true});
        console.log('updatedPharma service', updatedPharma);
        if(!updatedPharma){
            throw new Error('No pharmacy found');
        }
        return updatedPharma;
    }
    catch(err){
        console.log(err); 
    }
}

async function deletepharmacy(pharmaId){
    try{
        const deletedPharma = await Pharma.findOneAndDelete({"pharmaId" : pharmaId});
        console.log('deletedPharma service', deletedPharma);
        if(!deletedPharma){
            throw new Error('No pharmacy found');
        }
        return deletedPharma;
    }
    catch(err){
        console.log(err);

    }
}


async function getPharmaciesbyname(pharmaName){
    try{
        console.log('pharmaName service', pharmaName)
        const pharmaciesdata = await Pharma.find({ "name" : pharmaName});
        console.log('pharmaciesdata service', pharmaciesdata);
        if(!pharmaciesdata){
            throw new Error('No pharmacies found');
        }
        return pharmaciesdata;
    }
    catch(err){
        console.log(err);
  
    }
}


module.exports = {
    createPharma,
    getPharmacies,
    getMedicines,
    getPharmaById,
    getMedicinesbyPharma,
    deletepharmacy,
    getPharmaciesbyname,
    updatePharma,
    getMedicinesbyPharma
};