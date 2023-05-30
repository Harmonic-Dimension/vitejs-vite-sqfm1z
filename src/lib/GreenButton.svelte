<script>
  import { createEventDispatcher,
           onMount } from 'svelte';
  import { Button, 
           Card, 
           CardBody,
           CardText, 
           Icon, 
           Progress,
           Popover,
           Spinner } from 'sveltestrap';
  import Timer from './Timer.svelte';

  const dispatch = createEventDispatcher();

  let count = 0;
  let icons = ["hand-index-thumb", "mic", "mic-mute", "hourglass-split", 'clipboard-check'];
  let iconslen = icons.length;
  let active = true;

  let media = [];
  export let mediaRecorder = null;
  let spinner = false;
  let showcontrols = false;
  onMount(async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

  mediaRecorder.ondataavailable = (e) => media.push(e.data);
  mediaRecorder.onstop = function () {
    const audio = document.querySelector('audio');
    const blob = new Blob(media, { 'type': 'audio/webm' });
    media = [];
    audio.src = window.URL.createObjectURL(blob);
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
    if (count == 2) {
      startRecording();
    }
    else if (count == 3) {
      stopRecording();
      active = false;
      // TODO: take the data and process it
      // Dummy code:
      setTimeout(() => {
        active = true;
        count += 1;
        }, 3000);
    }
    else if (count == 4) {
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
        <!-- </CardText>
      </CardBody>
    </Card> -->
    <Card class="mb-3 w-100">
      {#if (count % iconslen) == 0}
      <Progress value={0}/>
        <div class="mt-3 encourage" center>
          Klik op de groene knop!
        </div>
        
      {:else if (count % iconslen) == 1}
      <Progress value={0} />
        <div class="mt-3 encourage" center>
          Klik nog een keer
        </div>

      {:else if (count % iconslen) == 2}
      <Progress value={33} />
        <Timer />
        <div class="mt-3 encourage" center>
          <p> De opname is begonnen.</p>
          <p> Klik nog een keer om de opname te stoppen.</p>
        </div>

      {:else if (count % iconslen) == 3}
      <Progress value={66}} />
         <div class="mt-3 encourage" center>
          De AI is nu bezig met de opname te verwerken. Een momentje geduld a.u.b.
        </div>
      {:else if (count % iconslen) == 4}
      <Progress value={100} />
        <div class="mt-3 encourage" center>
          Uw rapportage is klaar!
        </div>
      {/if}
      </Card>
      {#if showcontrols}
      <Card class="mt-3">
        <div>
          <audio controls />
        </div>
      </Card>
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
    background-color: #4BA93B;

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

