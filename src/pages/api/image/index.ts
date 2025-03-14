import { NextApiHandler, NextApiRequest } from "next";
import formidable from 'formidable';
import path from 'path';
import fs from "fs/promises";

export const config = {
    api: {
        bodyParser: false,
    },
};

let URLImagePulic :string

const assignURLImagePublic = (url:string) => {
    return URLImagePulic = url
}

const readFile = (
    req: NextApiRequest, 
    saveLocally?: boolean
    ): Promise<{fields: formidable.Fields; files: formidable.Files}> => {

        const options: formidable.Options = {};
        if (saveLocally) {
            options.uploadDir = path.join(process.cwd(), "/public/images");
            options.filename = (name,ext,path,form) => {
                const fileNameVar = Date.now().toString() + "-" + path.originalFilename;
                assignURLImagePublic(fileNameVar);
                return fileNameVar
            }
        }
        const form = formidable(options);

        return new Promise((resolve,reject) => {
            form.parse(req, (err, fields, files) => {
                if(err) reject(err)
                else{
                    resolve({fields,files})
                }
            });
        });
};

const handler: NextApiHandler = async(req,res) => {
    try {
        await fs.readdir(path.join(process.cwd() + "/public", "/images"));
    } catch (error) {
        await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
    }
    await readFile(req, true);

    
    res.json({done: "ok", url: URLImagePulic})
}

export default handler

