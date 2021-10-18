const submitButton = document.getElementById('submitButton');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotOutput = document.getElementById('chatbotOutput');

submitButton.onclick = userSubmitEventHandler;

function userSubmitEventHandler(e) {
    e.preventDefault()

    const query = {
        query: document.getElementById('myText').value
    }
    fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        body: JSON.stringify(query),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        chatbotInput.innerText = document.getElementById('myText').value;
        chatbotOutput.innerText = json;
    });
}
