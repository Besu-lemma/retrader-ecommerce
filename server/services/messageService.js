import Conversation from "../models/conversation.js";
import Message from "../models/message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async ({ senderId, receiverId, message }) => {
	// 1. Find or create conversation
	let conversation = await Conversation.findOne({
		participants: { $all: [senderId, receiverId] },
	});

	if (!conversation) {
		conversation = await Conversation.create({
			participants: [senderId, receiverId],
		});
	}

	// 2. Create message
	const newMessage = new Message({
		senderId,
		receiverId,
		message,
	});

	// 3. Link message to conversation
	conversation.messages.push(newMessage._id);

	// 4. Save in parallel
	await Promise.all([conversation.save(), newMessage.save()]);

	// 5. Socket notification
	const receiverSocketId = getReceiverSocketId(receiverId);
	if (receiverSocketId) {
		io.to(receiverSocketId).emit("newMessage", newMessage);
	}

	return newMessage;
};

const getMessages = async ({ senderId, userToChatId }) => {
	const conversation = await Conversation.findOne({
		participants: { $all: [senderId, userToChatId] },
	}).populate("messages");

	if (!conversation) return [];

	return conversation.messages;
};

export default {
	sendMessage,
	getMessages,
};
