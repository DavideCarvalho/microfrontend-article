import App from './App.html';

new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

const app = {}

const appName = 'Svelte Module';

const module = {
	bootstrap: () => {
	},
	mount: () => {
		document.body.innerHTML = "<x-app></x-app>";
	},
	unmount: () => {
		document.body.innerHTML = "";
	}
};

const loadCondition = () => location.pathname.indexOf("/app1/") === 0;

export { appName, module, loadCondition };

// export default app;
