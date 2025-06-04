import { scrape1 } from './1monthago.js'
import { scrape2 } from './2monthago.js'
import { scrape3 } from './3monthago.js'
import { scrape4 } from './4monthago.js'
import { scrape5 } from './5monthago.js'
import { scrape6 } from './6monthsago.js'

import {feed6} from './feed.js'
import {feed1} from './feed1.js'
import {feed2} from './feed2.js'
import {feed3} from './feed3.js'
import {feed4} from './feed4.js'
import {feed5} from './feed5.js'

async function runAllTasksSequentially() {
  try {
    await scrape1();
    await scrape2();
    await scrape3()
    await scrape4()
    await scrape5()
    await scrape6()
    await feed1()
    await feed2()
    await feed3()
    await feed4()
    await feed5()
    await feed6()


    console.log(' All tasks executed sequentially!');
    process.exit(0);

  } catch (err) {
    console.error(' Error during task execution:', err);
  }
}

runAllTasksSequentially();