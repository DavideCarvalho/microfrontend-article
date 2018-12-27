import { registerApplication, start } from 'single-spa';

System.import('http://localhost:8081/bundle.js')
.then((svelteModule) => registerApplication(svelteModule.default.appName, svelteModule.default.module, svelteModule.default.loadCondition));
start();