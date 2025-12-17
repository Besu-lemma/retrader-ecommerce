import messageService from "../services/messageService.js";

// SEND MESSAGE
 const sendMessage = async (req, res, next) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		const newMessage = await messageService.sendMessage({
			senderId,
			receiverId,
			message,
		});

		res.status(201).json(newMessage);
	} catch (error) {
		next(error);
	}
};

// GET MESSAGES
 const getMessages = async (req, res, next) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const messages = await messageService.getMessages({
			senderId,
			userToChatId,
		});

		res.status(200).json(messages);
	} catch (error) {
		next(error);
	}
};
export default{
	sendMessage,
	getMessages
}