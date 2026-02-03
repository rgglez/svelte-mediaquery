# svelte-mediaquery

[![License](https://img.shields.io/badge/License-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache2.0)
![GitHub all releases](https://img.shields.io/github/downloads/rgglez/svelte-mediaquery/total) 
![GitHub issues](https://img.shields.io/github/issues/rgglez/svelte-mediaquery) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/rgglez/svelte-mediaquery)
![MadeWithSvelte](https://madewithsvelte.com/storage/repo-shields/2274-shield.svg)
![GitHub stars](https://img.shields.io/github/stars/rgglez/svelte-mediaquery?style=social)
![GitHub forks](https://img.shields.io/github/forks/rgglez/svelte-mediaquery?style=social)

Conditionally rendering code fragments based on screen resolution, using [media query](https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Usage

### Svelte 3

```javascript
import { MediaQuery } from '$lib/components/MediaQuery.svelte';
```

```javascript
<MediaQuery query="(min-width: 1200px)" let:matches>
    {#if matches}
    ...
    {/if}
</MediaQuery>
```

### Svelte 5 with runes

```javascript
import { useMediaQuery } from '$lib/helpers/mediaQuery.js';

const isWide = useMediaQuery('(width > 992px)');
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
```

```javascript
{#if $isWide}
	<p>Wide screen</p>
{/if}

{#if $prefersDark}
	<p>Dark mode user</p>
{/if}
```

## License

Copyright 2026 Rodolfo González González

Licensed under [Apache License version 2.0](https://www.apache.org/licenses/LICENSE-2.0.html). Read the [LICENSE](LICENSE) file.
