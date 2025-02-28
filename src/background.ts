import browser, { Runtime } from "webextension-polyfill";

interface Message {
  message: string;
}

// Add the message listener
browser.runtime.onMessage.addListener(
  async (message: unknown, sender: Runtime.MessageSender): Promise<{ response: string } | void> => {
    console.log("Received message:", message, "from:", sender);

    // Check if the message matches expected format
    if (typeof message === "object" && message !== null && "message" in message) {
      const typedMessage = message as Message;

      if (typedMessage.message === "Hello from content script!") {
        return { response: "Hello from background!" };
      }
    }

    // If we don't return anything, return type is void (valid)
  }
);
