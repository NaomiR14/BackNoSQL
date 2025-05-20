import express from 'express'

const router = express.Router();

// Funcion Callback de tipo GET que responde un OK
const healtcheck = (req,res) =>{

    res.status(200).json({
        status: "Ok",
        message: "Server running correctly "
    })
}

//Endpoint de tipo GET (http://localhost:5001/api/v0/hea)
router.get('/healtcheck', healtcheck)

export default router;