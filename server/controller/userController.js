import user from "../model/user.js";


export const addUser =async (request, response) => {
    try{
        let exists = await user.findOne({sub: request.body.sub});
        if(exists){
            response.status(200).json({msg: ' User already exists ' });
            return;
        }

        const newuser = new user(request.body);
        await newuser.save();
        return response.status(200).json(newuser);
    }
    catch(error) {
        return response.status(500).json(error.message);
    }
}

export const getUsers =async (request, response) => {
    try{
        const users = await user.find({});
        return response.status(200).json(users);
    }
    catch(error) {
        return response.status(500).json(error.message);
    }
}