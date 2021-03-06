// @ts-nocheck

import { delay } from './src/utils';

export default { title: 'Button' };

export const Text = () => {};
Text.story = {
  parameters: {
    creevey: {
      tests: {
        async click() {
          await this.browser.actions().click(this.captureElement).perform();

          await delay(1000);

          await this.expect(await this.takeScreenshot()).to.matchImage('clicked button');
        } } } } };