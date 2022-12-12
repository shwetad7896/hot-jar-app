
import {test, expect } from '@playwright/test';
// const {test, expect} = require('@playwright/test');

// test('basic-test', async ({page}) => {
//     await page.goto('https://playwright.dev/');
//     const name = await page.innerText('.navbar_title');
//     expect(name).toBe('Playwright');
// });




  test('testjjj', async ({ page }) => {
    await page.goto('https://hot-jar-app.vercel.app/');
    await page.getByRole('img').click();
    await page.getByRole('heading', { name: 'hello world' }).first().click();
    await page.getByRole('button', { name: 'submit' }).click({
      clickCount: 4
    });
    await page.getByRole('button', { name: 'submit' }).click();
    await page.locator('#root div').filter({ hasText: 'hello worldsubmitHello world' }).locator('div').click();
    await page.getByRole('textbox').fill('Pratik Chakrborty');
    await page.getByRole('button', { name: 'submit' }).click();
    await page.getByRole('heading', { name: 'Hello world' }).nth(1).click();
    await page.getByRole('img').click();
  });
  