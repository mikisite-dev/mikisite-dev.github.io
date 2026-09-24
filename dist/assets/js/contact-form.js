window.onBeforeunload = () => {
    for (const form of document.getElementByTagname('form')) {
        form.reset();
    }
}
