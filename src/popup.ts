import browser from "webextension-polyfill";

document.getElementById("clickMe")?.addEventListener("click", async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    console.log("Active tab:", tabs[0]);
});
