export function useMediaQuery(query) {
	const matches = $state(false);
  
  	$effect(() => {
    	const mediaQuery = window.matchMedia(query);
    	matches = mediaQuery.matches;
    
    	const handler = (e) => {
      		matches = e.matches;
    	};
    
    	mediaQuery.addEventListener('change', handler);
    
    	return () => mediaQuery.removeEventListener('change', handler);
  	});
  
  	return () => matches;
}