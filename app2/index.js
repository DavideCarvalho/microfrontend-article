import { html, define } from 'hybrids';

const hybridsHelloWorld = {
  name: '',
  render: ({ name }) => html`
    <h1>Hello ${name}</h1>
  `,
};

define('x-hybrids-hello-world', hybridsHelloWorld);

const appName = 'hibryds-module2';

const module = {
	bootstrap: () => Promise.resolve(),
	mount: () => {
    document.body.innerHTML='<x-hybrids-hello-world name="app2"></x-hybrids-hello-world>';
		return Promise.resolve();
	},
	unmount: () => {
		document.body.innerHTML = '';
		return Promise.resolve();
	}
};

const loadCondition = () => location.pathname.indexOf("/app2") === 0;

export { appName, module, loadCondition };