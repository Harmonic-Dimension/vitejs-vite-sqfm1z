<script>
  import { onMount } from 'svelte';
  import { Row, Col, Button, Spinner } from 'sveltestrap';

  let media = [];
  let mediaRecorder = null;
  let spinner = false;
  let showcontrols = false;
  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => media.push(e.data)
    mediaRecorder.onstop = function(){
      const audio = document.querySelector('audio');
      const blob = new Blob(media, {'type' : 'audio/ogg; codecs=opus' });
      media = [];
      audio.src = window.URL.createObjectURL(blob);
    }
  })
  function startRecording(){ 
    mediaRecorder.start();
    spinner = true;
   }
  function stopRecording() { 
    mediaRecorder.stop();
    spinner = false;
    showcontrols = true; }
</script>

<section>
  <Row>
    <Col>
      <Button on:click={startRecording} color="primary">Record</Button>
    </Col>
    <Col>
      <Button on:click={stopRecording} outline>Stop</Button>
    </Col>
    <Col>
      {#if spinner}
        <Spinner />
      {/if}
    </Col>   
  </Row>
  <Row>
    {#if showcontrols}
      <audio controls />
    {/if}
  </Row>
</section>