import { registerApplication, start } from 'single-spa';

System.import('http://localhost:8080/public/bundle.js')
  .then(svelteModule => registerApplication(svelteModule.default.appName, svelteModule.default.module, svelteModule.default.loadCondition))

System.import('http://localhost:8081/public/bundle.js')
  .then(hybridsModule => registerApplication(hybridsModule.default.appName, hybridsModule.default.module, hybridsModule.default.loadCondition))

start();