import msg from "../model/msg.js"
import conversation from "../model/conversation.js";

export const newMessage = async (request, response) => {
    try{
        const newmsg = new msg(request.body);
        await newmsg.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text});
        return response.status(200).json('Msg sent successfully');
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getmsg = async(request,response) => {
    try{
        const msgs = await msg.find({ conversationId: request.params.id});
        console.log("Retrieved messages:", msgs);
        return response.status(200).json(msgs);
    }catch(error){
        return response.status(500).json(error.message);
    }
}