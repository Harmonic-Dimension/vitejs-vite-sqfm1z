<script>
  import { createEventDispatcher } from 'svelte';
  import { Button, Col, Row, Icon, Spinner } from 'sveltestrap';

  const dispatch = createEventDispatcher();

  let count = 0;
  let icons = ["hand-index-thumb-fill", "mic-fill", "mic-mute-fill", "hourglass-split", 'clipboard-check'];
  let iconslen = icons.length;
  const iconswap = () => {
    count += 1
    if (count == 3) {
      startRecording();
    }
  };

  function startRecording() {
    dispatch('status', {
      text: 'recording'
    });
  };
</script> 

<Row>
  <Col> 
    <button on:click={iconswap} class="green-button">
      <div class="image-container">
        <Icon name={icons[count % iconslen]} />
      </div>
    </button>
  </Col>
</Row>
<Row>
  <Col>
    <div><p>
    {#if (count % iconslen) == 0} 
      Laten we beginnen...
    {:else if (count % iconslen) == 1}
      Start de opname!
    {:else if (count % iconslen) == 2}
      Opname begonnen <Spinner color="success" />
    {:else if (count % iconslen) == 3}
      Verwerken... <Spinner color="info" />
    {:else if (count % iconslen) == 4}
      Klaar! 
    {/if}
    </p></div>
  </Col>
</Row>

<style>

  .green-button {
    width: 3em;
    height: 3em;
    background-color: #48bf91;
    font-size: 3em;
    border-radius: 50%;
    text-align: center;
  }

  .image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

  .image-container img {
    max-width: 100%;
    max-height: 100%;
  }

</style>

