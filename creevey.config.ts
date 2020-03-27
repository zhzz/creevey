import path from 'path';
import { CreeveyConfig } from './src/types';

const config: CreeveyConfig = {
  gridUrl: 'http://screen:shot@grid.testkontur.ru/wd/hub',
  screenDir: path.join(__dirname, 'stories', 'images'),
  enableFastStoriesLoading: true,
  browsers: {
    chrome: {
      browserName: 'chrome',
      viewport: { width: 1024, height: 720 },
    },
    ie11: {
      browserName: 'internet explorer',
      viewport: { width: 1024, height: 720 },
    },
    firefox: {
      browserName: 'firefox',
      viewport: { width: 1024, height: 720 },
    },
    // safari: {
    //   browserName: 'safari',
    //   viewport: { width: 1024, height: 720 },
    //   gridUrl: 'http://10.33.95.11:4444/wd/hub',
    //   storybookUrl: 'http://10.4.24.26:6006',
    // },
  },
};

export default config;
