let chatbotMsgList = ["Hii", "Hey", "Good Morning", "Good Evening", "How Can I help You?", "Thanks"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");


function getReplayFromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    // creating and appending the container element div
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // creating and appending the span Element
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}


function sendMsgToRobot() {
    let userMsg = userInputEl.value;

    // Creating and appending the container Element div
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // creating and appending span element 
    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplayFromChatbot();
}

