<script>
	import Card from '../components/button-card.svelte';
	import { holidays, getNearestHoliday, getCountdownToDate } from '$lib/holidays';
	import { onDestroy } from 'svelte';

    $: holiday = getNearestHoliday(holidays);

	$: countDown = getCountdownToDate(holiday.date);

	const interval = setInterval(() => {
		countDown = getCountdownToDate(holiday.date)
	}, 1000);

	onDestroy(() => clearInterval(interval));


</script>

<div class="container grid grid-cols-6 p-10 gap-8">
	<div class="col-span-6 lg:col-span-2 rounded-2xl p-4 flex flex-col justify-end {holiday.style}">
        <h1 class="text-4xl font-semibold uppercase">{holiday.name}</h1>
		<p class="mt-4">Coming up in 
			<span class="font-black text-5xl block uppercase">{countDown.days} Days</span>
			<span class="italic text-lg">{countDown.hours} hours {countDown.minutes} minutes & {countDown.seconds} seconds</span>
			<!-- d {countDown.hours} h {countDown.minutes} m {countDown.seconds} s -->
		</p>
    </div>
	<div class="col-span-6 lg:col-span-4">
		<div class="card-grid grid grid-cols-4 gap-4">
			{#each holidays as { serial, name, date, style }}
				<Card title={name} {date} styles={style} index={serial} on:click="{() => holiday = {name, date, style}}"></Card>
			{/each}
		</div>
	</div>
</div>
