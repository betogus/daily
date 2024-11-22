import express from "express";

import passport from "passport";

const router = express.Router();

router.post('/register', passport.authenticate('register', {failureRedirect: '/auth/failedRegister'}), (req, res) => {
    res.send({message: 'signed up'})
})


router.post('/failedRegister', (req, res) => {
    res.send({error: 'I cannot authenticate you'})
})


router.post('/login', passport.authenticate('login', { failureRedirect: '/auth/failedLogin'}), (req, res) => {
    res.status(200).send({message: 'logged in'})
})


router.post('/logout', (req, res) => {
    res.send({error: 'I cannot log in'})
})


router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).send({ error: "Error al cerrar sesión" });
        }
        res.send({ message: "Sesión cerrada con éxito" });
    });
});

router.get('/failedLogin', (req, res) => {
    res.status(401).send({message: "unauthorized"})
})

router.get('/failedRegister', (req, res) => {
    res.send({message: "error"})
})
export default router;