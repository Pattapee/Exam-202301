Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("ResizeObserver loop limit exceeded")) {
    // ignore the error
    return false;
  }
});
