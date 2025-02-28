import browser from "webextension-polyfill";

console.log("Content script loaded!");

// document.body.style.border = "5px solid red";  

// Define the expected response type
interface BackgroundResponse {
  response: string;
}

// Send message and type the response
browser.runtime.sendMessage({ message: "Hello from content script!" })
  .then((response) => {
    const typedResponse = response as BackgroundResponse | undefined;  // Type assertion
    console.log("Response from background:", typedResponse?.response);
  })
  .catch(error => {
    console.error("Error sending message:", error);
  });
