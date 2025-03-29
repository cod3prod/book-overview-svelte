<script lang="ts">
	import twitterIcon from '$assets/icons/twitter.webp';
	import { Button } from '$components/ui';
	import FaqItem from './FaqItem.svelte';
	import { faqs } from '$lib/data';
	import { Container } from '$components/layout';

	let selectedQuestion = $state(-1);

	const handleClick = (index: number) => {
		if (selectedQuestion === index) {
			selectedQuestion = -1;
		} else {
			selectedQuestion = index;
		}
	};
</script>

<Container>
	<h2 class="mb-16">Frequently asked questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FaqItem {faq} isSelected={index === selectedQuestion} onclick={() => handleClick(index)} />
		{/each}
	</div>
	<div class="flex flex-col items-center text-[grey]">
		<Button class="mt-4">BUY NOW</Button>
		<p class="mt-8">Any other questions?</p>
		<a class="underline" href="https://x.com/KIZO_ES">
			<p class="flex items-center justify-center gap-2">
				Hit me up on twitter <img src={twitterIcon} class="h-4 w-4" alt="twitterIcon" />
			</p>
		</a>
	</div>
</Container>
