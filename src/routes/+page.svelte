<script>
	import Card from '../components/button-card.svelte';
	import { holidays, getNearestHoliday, getCountdownToDate } from '$lib/holidays';
	import { onDestroy } from 'svelte';

	$: holiday = getNearestHoliday(holidays);

	$: countDown = getCountdownToDate(holiday.date);

	const interval = setInterval(() => {
		countDown = getCountdownToDate(holiday.date);
	}, 1000);

	onDestroy(() => clearInterval(interval));
</script>

<div class="grid grid-cols-6 gap-8 p-4 md:p-8 lg:p-10">
	<div
		class="col-span-6 w-full flex flex-col gap-16 md:gap-0 md:justify-between rounded-2xl lg:col-span-2 {holiday.style}"
	>
		<div class="group p-4">
			<h1 class="text-4xl font-semibold uppercase">{holiday.name}</h1>
			<p class="mt-4">
				Coming up in
				<span class="block text-5xl font-black uppercase">{countDown.days} Days</span>
				<span class="text-lg italic"
					>{countDown.hours} hours {countDown.minutes} minutes & {countDown.seconds} seconds</span
				>
			</p>
		</div>
	</div>
	<div class="col-span-6 lg:col-span-4">
		<div class="card-grid grid grid-cols-4 gap-4">
			{#each holidays as { serial, name, date, style }}
				<Card
					title={name}
					{date}
					styles={style}
					index={serial}
					on:click={() => (holiday = { name, date, style })}
				></Card>
			{/each}
		</div>
	</div>
</div>
