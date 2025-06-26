import { state, effect } from 'svelte';

export function useMediaQuery(query) {
	const matches = state(false);

	const mediaQuery = window.matchMedia(query);

	effect(() => {
		matches.set(mediaQuery.matches);

		const handler = (e) => matches.set(e.matches);
		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	});

	return matches;
}