import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


/**
 * 
 * @param {Request} req original request previous middleware of verification JWT
 * @param {Response} res response to verification of JWT
 * @param {NextFunction} next next function to be executed
 * @returns errors of verification or next execution
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // check header from request for 'x-access-token'
    let token: any = req.headers['x-access-token'];

    //verify if jwt is present
    if (!token){
        return res.status(403).send({
            authentication: "Missing JWT in request",
            message: "Not authorised to consume this endpoint"
        })
    }

    // verify the token obtained
    jwt.verify(token, '', (err: any, decoded: any) => {
        if(err){
            return res.status(500).send({
                authentication: "JWT verification failed",
                message: "Failed to verify JWT token in request"
            })
        }

        // pass something to next request (id of user || other info)


        // execute next function -> protected routes will be executed
        next();

    });

}