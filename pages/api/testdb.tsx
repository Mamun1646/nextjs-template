import { NextApiRequest, NextApiResponse } from "next";
import User from "database/entity/user/user"

export default async function handler(req:NextApiRequest,res:NextApiResponse){

    if(req.method==="GET"){
    const user=await User.findAll({attributes: ['id','firstname', 'lastname']})
       return res.status(200).json(user);
    }

}