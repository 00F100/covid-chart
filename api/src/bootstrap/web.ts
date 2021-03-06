import { config as dotenv } from 'dotenv';
import { Application, IApplication, Logger } from '..';

dotenv({
  debug: process.env.NODE_ENV === 'development' ? true : false
});

const {
  API_PORT
} = process.env;

// get application
const app: IApplication = Application.get();

// start and listen on port ...
if (app.listen(API_PORT || '')) {
  Logger.get().info('Web server success!');
} else {
  Logger.get().fatal('Web server error!');
}
