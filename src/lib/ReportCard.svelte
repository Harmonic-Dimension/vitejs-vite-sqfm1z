<script>
import {Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardText,
        CardTitle,
        Icon,
        Popover,
        } from 'sveltestrap';

  export let titleText = '[Titel]';
  export let bodyText = '[Tekst]';

  let copySuccess = false;
  

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Make the textarea non-editable to avoid focus and unwanted text selection.
    textarea.setAttribute('readonly', '');

    // Hide the textarea from rendering.
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    
    // Select and copy the text.
    textarea.select();
    document.execCommand('copy');

    // Clean up the temporary textarea.
    document.body.removeChild(textarea);
  }

  const copyPaste = () => {
    copyToClipboard(bodyText);
    copySuccess = true;
  };
</script>




<div>
  <Card class='p-0 mb-3 w-100'>
    <CardHeader> 
      <CardTitle class='p-0 mt-1'>
        {titleText}
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div class="card-body">
        {bodyText}
      </div>
    </CardBody>
    <CardFooter>
      {#if !copySuccess}
      <Button id="cpBtn" on:click={copyPaste} color='primary' outline><Icon name="clipboard-plus" /> Kopiëer</Button>
      {:else}
      <Button id="cpBtn" on:click={copyPaste} color='primary' outline><Icon name="check-circle-fill" /> Gekopiëerd</Button>
      {/if}
    </CardFooter>
  </Card>
</div>

<style>
.card-body {
  text-align: left;
  white-space: pre-wrap;
  }
</style>