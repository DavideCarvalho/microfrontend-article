import App from './App.html';

const appName = 'svelte-module1';

const module = {
	bootstrap: () => Promise.resolve(),
	mount: () => {
		new App({
			target: document.body,
			data: {
				name: 'app1'
			}
		});
		return Promise.resolve();
	},
	unmount: () => {
		document.body.innerHTML = '';
		return Promise.resolve();
	}
};

const loadCondition = () => 
	location.pathname === '/' 
	|| location.pathname.indexOf("/app1") === 0;

export { appName, module, loadCondition };