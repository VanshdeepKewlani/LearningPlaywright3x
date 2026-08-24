// callback fires every time the page logs to console
page.on('console', msg => console.log(`Page log: ${msg.text()}`));

// callback used to intercept and mock network requests
await page.route('**/api/prices', route => {
  route.fulfill({ json: { price: 42 } });
});