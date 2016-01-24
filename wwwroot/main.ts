import {bootstrap} from 'angular2/platform/browser';
import {Component, OpaqueToken, provide, Inject, Input, Output, EventEmitter, enableProdMode} from 'angular2/core';
import {subscribe} from './components/subscribe';

@Component({
    selector: 'app',
    template: `
    <h1>Youtube Flix App</h1>
  `,
    directives: [],
    providers: null
})
class YoutubeFlixApp { }

bootstrap(YoutubeFlixApp).catch(err => console.error(err));