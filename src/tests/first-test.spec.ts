
import {test, expect } from '@playwright/test';
// const {test, expect} = require('@playwright/test');

// test('basic-test', async ({page}) => {
//     await page.goto('https://playwright.dev/');
//     const name = await page.innerText('.navbar_title');
//     expect(name).toBe('Playwright');
// });

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('textbox').click();
    await page.getByRole('heading', { name: 'Hello world' }).nth(1).click();
    await page.getByText('hello worldHello world').click();
    await page.getByText('hello worldHello world').click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('');
    await page.getByRole('heading', { name: 'hello world' }).first().click();
    await page.getByRole('heading', { name: 'Hello world' }).nth(1).click();
    await page.locator('#root div').filter({ hasText: 'hello worldHello world' }).locator('div').click();
  });

  