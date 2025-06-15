//import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
const { Given } = require('@cucumber/cucumber'); const { chromium } = require('playwright');
const { Then } = require('@cucumber/cucumber');
const { When } = require('@cucumber/cucumber');

Given('I launch the browser', async function (this: CustomWorld) { 
  const browser = await chromium.launch(); 
  const context = await browser.newContext(); 
  const page = await context.newPage(); 
  this.browser = browser; 
  this.context = context; 
  this.page = page; 
});

When('I go to {string}', async function (this: CustomWorld, url: string) {
  if (!this.page) {
    throw new Error('Page is not initialized');
  }
  await this.page.goto(url);
});

Then('the page title should be {string}', async function (this: CustomWorld, expectedTitle: string) {
  if (!this.page) {
    throw new Error('Page is not initialized');
  }
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
});


