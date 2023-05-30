<script>
    import { onMount, onDestroy } from 'svelte';
    import { Spinner } from 'sveltestrap';

    let timerValue = '00:00:00';
    let interval;

    function startTimer() {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        interval = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }

            timerValue = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
        }, 1000);
    }

    onMount(startTimer);
    onDestroy(() => clearInterval(interval));
</script>

<div class = "mt-3">
  <Spinner color='danger' size="sm" type='grow'/> 
  {timerValue}
</div>
