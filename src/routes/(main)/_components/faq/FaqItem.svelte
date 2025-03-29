<script lang="ts">
	import chevronDown from '$assets/icons/chevron-down.svg';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Faq = {
		question: string;
		answer: string;
	};

	type FaqItemProps = {
		faq: Faq;
		isSelected: boolean;
	} & HTMLButtonAttributes;

	let { faq, isSelected, ...rest }: FaqItemProps = $props();
	console.log('my test', faq.answer);
</script>

<button
	class="border-light-grey flex cursor-pointer items-start justify-between border-b py-3 text-left"
	class:container-expanded={isSelected}
	{...rest}
>
	<div class="grow pr-36">
		<p class="mb-2 font-semibold">{faq.question}</p>
		<p
			class={twMerge(
				'max-h-0 overflow-hidden px-2 opacity-0 transition-all duration-300',
				isSelected ? 'max-h-fit opacity-100' : ''
			)}
		>
			{faq.answer}
		</p>
	</div>
	<img
		class={twMerge(
			'transition-trasnform h-6 w-6 transform duration-300 ease-linear',
			isSelected ? 'rotate-180' : ''
		)}
		src={chevronDown}
		alt="chevron-down"
	/>
</button>
