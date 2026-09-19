import {test} from '@playwright/test';
//page=fixture 
test('logging sauce demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
}) 