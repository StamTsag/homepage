<script>
	// Svelte-routing
	import {Router, Route} from 'svelte-routing';

	// Relative imports
	import Main from './routes/Main.svelte';
	import Projects from './routes/Projects.svelte';
	import AboutMe from './routes/AboutMe.svelte';
</script>

<Router>
	<Route path='/' component='{Main}'/>
	<Route path='projects' component='{Projects}'/>
	<Route path='aboutme' component='{AboutMe}'/>
</Router>
