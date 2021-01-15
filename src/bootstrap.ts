import { CurrentEnvironment } from 'environment';
import { main } from './main';
import throng from 'throng';

throng(
	CurrentEnvironment.isDev ? { start: main, workers: 1 } : { start: main },
);
