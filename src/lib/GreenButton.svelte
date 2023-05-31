<script>
  import { createEventDispatcher,
           onMount,
           onDestroy } from 'svelte';
  import { Button, 
           Card, 
           CardBody,
           CardText, 
           Icon, 
           Progress,
           Popover,
           Spinner,
           Toast,
           ToastBody,
           ToastHeader } from 'sveltestrap';
  import Timer from './Timer.svelte';

  const dispatch = createEventDispatcher();

  let count = 0;
  let icons = ["hand-index-thumb", "mic", "mic-mute", "hourglass-split", 'clipboard-check'];
  let iconslen = icons.length;
  let active = true;
  let spinner = false;
  let showcontrols = false;
  let demoState = true;

  let media = [];
  let mediaRecorder = null;
  let audioElement;

  onMount(async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

  mediaRecorder.ondataavailable = (e) => media.push(e.data);
  mediaRecorder.onstop = function () {
    // const audio = document.querySelector('audio');
    const blob = new Blob(media, { 'type': 'audio/webm' });
    media = [];
    audioElement.src = window.URL.createObjectURL(blob);
  };
});

  // onMount(async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //   mediaRecorder = new MediaRecorder(stream);
  //   mediaRecorder.ondataavailable = (e) => media.push(e.data)
  //   mediaRecorder.onstop = function(){
  //     const audio = document.querySelector('audio');
  //     const blob = new Blob(media, {'type' : 'audio/ogg; codecs=opus' });
  //     media = [];
  //     audio.src = window.URL.createObjectURL(blob);
      
  //     // // Create a download link
  //     // const downloadLink = document.createElement('a');
  //     // downloadLink.href = window.URL.createObjectURL(blob);
  //     // downloadLink.download = 'recording.ogg'; // Specify the desired filename;
  //     // // Add the download link to the document
  //     // document.body.appendChild(downloadLink);
  //     // // Simulate a click event to trigger the download
  //     // downloadLink.click();
  //     // // Clean up by removing the download link
  //     // document.body.removeChild(downloadLink);
  //   }
  // }
  // )

  onDestroy(() => {
    if (audioElement) {
      audioElement.src = '';
    }
  });

  function startRecording(){ 
    mediaRecorder.start();
    spinner = true;
   };

  function stopRecording() { 
    mediaRecorder.stop();
    spinner = false;
    showcontrols = true; 
    };

  const iconswap = () => {
    count += 1
    if (count % iconslen == 0) {
      showcontrols = false;
    }
    else if (count % iconslen == 1) {
      active = false;
    }
    else if (count % iconslen == 2) {
      startRecording();
    }
    else if (count % iconslen == 3) {
      stopRecording();
      active = false;
      // TODO: take the data and process it
      // Dummy code:
      setTimeout(() => {
        active = true;
        count += 1;
        }, 3000);
    }
    else if (count % iconslen == 4) {
      showcontrols = true;
    }
  };
</script> 


   <!-- <Card id="btncard" class="mb-3">
      <CardBody> -->
      <div class="p-5">
      <button id="grnbtn" on:click={iconswap} disabled={!active} class="green-button">
        <div class="image-container">
          <Icon name={icons[count % iconslen]}/>
        </div>
      </button>
        <!-- <CardText> -->
          {#if (count % iconslen) == 0} 
            <Popover placement="top" trigger="hover" target="grnbtn">
              Klik hier om te beginnen 
            </Popover>
          {:else if (count % iconslen) == 1}
            <Popover placement="top" trigger="hover" target="grnbtn">
              Start de opname!
            </Popover>
          {:else if (count % iconslen) == 2}
            <Popover placement="top" isOpen target="grnbtn">
              Opname bezig...
            </Popover>
          {:else if (count % iconslen) == 3}
            <Popover placement="top" trigger="hover" target="grnbtn">
              Opname compleet.
            </Popover>
            {#if !active}
              <Spinner color="success" type="warning" />
            {/if}
          {:else if (count % iconslen) == 4}

          {/if}
          </div>

      <Toast class="me-1 w-100"> 
      {#if (count % iconslen) == 0}
        <ToastHeader>
          Stap 1: Klik op de groene knop!
        </ToastHeader>
        <ToastBody>
          Eén groene knop is een app die fysiotherapeuten helpt met het schrijven van dossiers.
        </ToastBody>
      {:else if (count % iconslen) == 1}
        <ToastHeader>
          Stap 2: Toestemming van uw patiënt verkrijgen.
        </ToastHeader>
        <ToastBody>
          <input type=checkbox bind:checked={active}>  Uw patiënt begrijpt en is akkoord met de algemene voorwaarden voor het gebruik van één groene knop.
        </ToastBody>
      {:else if (count % iconslen) == 2}
        <ToastHeader>
          Stap 3: Gesprek opnemen.
        </ToastHeader>
        <ToastBody>
          <Timer />
          <br>

          Eén groene knop luister nu mee met uw gesprek met de patiënt. Druk als het gesprek afgelopen is nog een keer op de groenen knop.
        </ToastBody>
      {:else if (count % iconslen) == 3}
        <ToastHeader>
          Stap 4: Gesprek analyseren.
        </ToastHeader>
        <ToastBody>
          Eén groene knop analyseert nu met behulp van AI het gesprek, en schrijft alvast uw dossierstukken. Even geduld a.u.b.
        </ToastBody>
      {:else if (count % iconslen) == 4}
        <ToastHeader>
          Klaar!
        </ToastHeader>
        <ToastBody>
          Eén groene knop heeft de stukken voor u klaargezet. 
        </ToastBody>
      {/if}
      </Toast> 

      {#if showcontrols && demoState}
      <Toast class="me-1 w-100">
        <ToastHeader>
          Audio-opname terugluisteren (demo)
        </ToastHeader>
        <ToastBody>
          <div class="mt-3">
            <audio bind:this={audioElement} controls />
          </div>
        </ToastBody>
      </Toast>
      {/if}

<style>

  .green-button {
    width: 3em;
    height: 3em;
    background-color: #59bf48;
    text: #ffffff;
    font-size: 3em;
    border-radius: 100%;
    text-align: center;
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
  }

  .green-button:hover {
    background-color: #5DD04B;
  }

  .green-button:disabled {
    background-color: #A2C19C;
  }

  .encourage {
    font-weight: 300;
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

