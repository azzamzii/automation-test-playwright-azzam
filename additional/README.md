## Additional Notes

There's one more test I’ve been working on that wasn’t fully completed before the original submission.  
This `additional/` folder using for separate my original submitted work during the exam.

- **Reason:** I ran out of time but wanted to show my continued effort and thought process.

Here, I am still using the same approach (POM and directly using some pages) for testing the cart feature

### How to run the Cart Test

1. Configure the playwright config at `playwright.config.js` to change the `testDir` config.  
Before:
    ```sh
    testDir: './tests'
    ```
    After:
    ```sh
    testDir: "./"
    ```

2. Run the playwright test for Cart Test
   ```sh
    npx playwright test additional/cart.spec.js
    ```
💡 Note: This test uses a 60-second timeout because initial page loading may take some time.

### The result after testing in 3 browser:
