<script>
import {Button,
        ButtonGroup,
        Col,
        Icon,
        Popover,
        Row } from 'sveltestrap';

import ReportCard from './ReportCard.svelte';

let patientbehoeftenText = '';
let stoornissenText = '';
let historieText = '';
let beperkingenText = '';

let conclusiesText = '';
let soepText = '';
let behandelplanText = '';

function loadTextFromFile(filepath) {
  return fetch(filepath)
    .then(response => response.text())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('Error:', error);
    });
};

export let demoToken = true;
function setDemoText(demoToken) {
  if (demoToken) {
    loadTextFromFile('../assets/demotext/SOEP-rapportage.txt').then(soepText  => {
    console.log(soepText)});
  }
};



let dummyText = 'De fysiotherapeut heeft de patiënt gevraagd de pijn te beschrijven en heeft gevraagd of er zwelling of blauwe plekken zijn opgemerkt. De fysiotherapeut heeft vervolgens de patiënt gevraagd om zijn arm omhoog te tillen, maar de patiënt kon dit niet doen vanwege de pijn. Op basis van deze informatie concludeert de fysiotherapeut dat de schouder van de patiënt ontwricht is. Er zijn geen specifieke tests genoemd die zijn uitgevoerd.';



let currentTab = 'anamnese';
let anamneseColor = 'primary';
let conclusiesColor = 'outline-primary';
let soepColor = 'outline-primary';
let behandelplanColor = 'outline-primary';


function openAnamnese() {
  currentTab = 'anamnese';
  anamneseColor = 'primary'
  conclusiesColor = 'outline-primary';
  soepColor = 'outline-primary';
  behandelplanColor = 'outline-primary';
}

function openConclusies() {
  currentTab = 'conclusies';
  anamneseColor = 'outline-primary'
  conclusiesColor = 'primary';
  soepColor = 'outline-primary';
  behandelplanColor = 'outline-primary';
}

function openSoepRapport() {
  currentTab = 'soepRapport';
  anamneseColor = 'outline-primary'
  conclusiesColor = 'outline-primary';
  soepColor = 'primary';
  behandelplanColor = 'outline-primary';
}

function openBehandelplan() {
  currentTab = 'behandelplan';
  anamneseColor = 'outline-primary'
  conclusiesColor = 'outline-primary';
  soepColor = 'outline-primary';
  behandelplanColor = 'primary';
}

</script>


<div>
  <div class='mb-5'>
  <ButtonGroup>
    <Button color={anamneseColor} on:click={openAnamnese}>Anamnese</Button>
    <Button color={conclusiesColor} on:click={openConclusies}>Conclusies</Button>
    <Button color={soepColor} on:click={openSoepRapport}>SOEP-rapport</Button>
    <Button color={behandelplanColor} on:click={openBehandelplan}>Behandelplan</Button>
  </ButtonGroup>
  </div>

  {#if (currentTab == 'anamnese')}
    <Row>
      <Col>
        <ReportCard titleText='Patiëntbehoeften' bodyText={dummyText}/>
      </Col>
      <Col>
      <ReportCard titleText='Stoornissen' bodyText={dummyText}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <ReportCard titleText='Historie' bodyText={dummyText}/>
      </Col>
      <Col>
      <ReportCard titleText='Beperkingen' bodyText={dummyText}/>
      </Col>
    </Row>
  {:else if (currentTab == 'conclusies')}
    <Row>
      <Col xs='2'>
      </Col>
      <Col>
      <ReportCard titleText='Conclusies' bodyText={dummyText}/>
      </Col>
      <Col xs='2'>
      </Col>
    </Row>
  {:else if (currentTab == 'soepRapport')}
    <Row>
      <Col xs='2'>
      </Col>
      <Col>
      <ReportCard titleText='SOEP-rapport' bodyText={soepText}/>
      </Col>
      <Col xs='2'>
      </Col>
    </Row>
  {:else if (currentTab == 'behandelplan')}
    <Row>
      <Col xs='2'>
      </Col>
      <Col>
      <ReportCard titleText='Behandelplan' bodyText={dummyText}/>
      </Col>
      <Col xs='2'>
      </Col>
    </Row>
  {/if}
</div>

<style>
.card-body {
  text-align: left;
}

</style>

