import {bootstrap} from 'angular2/platform/browser';
import {subscribe} from './components/subscribe';
import {YoutubeFlixApp} from './app';


bootstrap(YoutubeFlixApp).catch(err => console.error(err));