function waitForJobToFinish(jobId) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      const res = await fetch(`/jobs/${jobId}`);
      const { status } = await res.json();

      if (status === 'done') {
        clearInterval(interval);
        resolve(status);
      } else if (status === 'failed') {
        clearInterval(interval);
        reject(new Error('Job failed'));
      }
      // otherwise, do nothing and let the interval poll again
    }, 500);
  });
}

// used inside a Playwright test after starting a background job
await page.click('#start-job');
await waitForJobToFinish('job-123');