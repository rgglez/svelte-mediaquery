<script>
    export let query;

    let mql;
    let mqlListener;
    let wasMounted = false;
    let matches = false;

    $effect(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $effect(() => {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    });

    function addNewListener(query) {
        mql = window.matchMedia(query);
        mqlListener = v => matches = v.matches;
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }
</script>

<slot {matches} />