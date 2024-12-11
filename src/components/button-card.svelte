<script>
	export let title;
	export let date;
	export let styles;
	export let index;

	let isPast = new Date(date) < new Date();
</script>

<button class="{styles} min-h-28 relative cursor-pointer rounded-xl p-2 text-left flex items-start flex-col gap-1 focus:ring-1 focus:outline-0 {isPast ? 'grayscale opacity-50 pointer-events-none cursor-not-allowed select-none': ''}" disabled="{isPast}" on:click>
	<p class="text-lg font-medium leading-tight">{title}</p>
	<small>{date}</small>
	<span class="absolute text-6xl font-bold opacity-5 right-0 bottom-0">{index}</span>
</button>
