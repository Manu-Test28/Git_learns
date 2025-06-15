import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext, chromium } from 'playwright';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  playwright = { chromium };

  constructor(options: IWorldOptions<any>) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
