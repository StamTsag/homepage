<script context="module">
	export function load({ error, status }) {
		return {
			props: {
                status: `${status}`,
                err: `${error.message}`
			}
		};
	}
</script>

<script>
    export let err, status;
</script>

<h1 style='text-align: center; font-size: 6vh;'>{status}</h1>
<h1 style='text-align: center; font-size: 5vh;'>{err}</h1>
