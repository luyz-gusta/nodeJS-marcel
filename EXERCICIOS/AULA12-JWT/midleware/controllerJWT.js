/************************************************************************************************
 * Objetivo: Aprendendo JWT
 * Autor: Luiz Gustavo
 * Data: 30/08/2023
 * Versão: 1.0
************************************************************************************************/

//Import da biblioteca pro jwt
const jwt = require('jsonwebtoken')

//Chave secreta para a criação do JWT
const SECRET = 'b1c2d5'

//Tempo para validar o token do JWT (segundos)
const EXPIRES = 120

//Criação do JWT (retorna um TOKEN)
const createJWT = async (payload) => {

    //Gera o Token
        //payload - a identificação do usuário autenticado
        //SECRET - a chave secreta
        //expiresIn - tempo de expiração do token
    const token = jwt.sign({userID: payload}, SECRET, {expiresIn: EXPIRES})    

    return token
}

//Validação de autenticidade do JWT (recebe o token para validação)
const validateJWT = async (token) => {
    let status = false

    //Valida a autenticidade do token
    jwt.verify(token, SECRET, async (err, decode) => {
        if(!err)
            status = true

        return status
    })
}

module.exports = {
    createJWT,
    validateJWT
}