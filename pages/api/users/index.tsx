import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../data";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="GET")
       return res.status(200).json(Data);

}