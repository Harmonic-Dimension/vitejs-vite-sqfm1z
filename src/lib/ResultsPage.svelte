<script>
import {Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardText,
        CardTitle,
        Col,
        Icon,
        Popover,
        Row } from 'sveltestrap';

let dummyText = 'De fysiotherapeut heeft de patiënt gevraagd de pijn te beschrijven en heeft gevraagd of er zwelling of blauwe plekken zijn opgemerkt. De fysiotherapeut heeft vervolgens de patiënt gevraagd om zijn arm omhoog te tillen, maar de patiënt kon dit niet doen vanwege de pijn. Op basis van deze informatie concludeert de fysiotherapeut dat de schouder van de patiënt ontwricht is. Er zijn geen specifieke tests genoemd die zijn uitgevoerd.';

let showPopover = false;

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
  copyToClipboard(dummyText);
  showPopover = true;
  setTimeout(() => {
        showPopover = false;
        }, 2000);
};

</script>


<div>
  <Row>
  <Col>
  <Card class='mb-3'>
    <CardHeader > 
      <CardTitle>
        SOEP-rapportage
      </CardTitle>
    </CardHeader>
    <CardBody>
      <div class="card-body">
        {dummyText}
      </div>
    </CardBody>
    <CardFooter>
      <Button id="cpBtn" on:click={copyPaste} color='primary' outline><Icon name="clipboard-plus" /></Button>
      <Popover bind:showPopover placement="top" target="cpBtn">Tekst gekopiëerd naar clipboard.</Popover>

    </CardFooter>
  </Card>
  </Col>
  <Col>
  </Col>
  </Row>
</div>

<style>
.card-body {
  text-align: left;
}

</style>

