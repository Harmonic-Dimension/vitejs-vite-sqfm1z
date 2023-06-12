<script>
import {Button,
        ButtonGroup,
        Col,
        Icon,
        Popover,
        Row } from 'sveltestrap';


import ReportCard from './ReportCard.svelte';
import DemoButton from './DemoButton.svelte';

// Importing the report which is stored in stores.js after it created in GreenButton.svelte
import { report } from './../stores.js';

// Defining a variable in which we store the api_key as retrieved from stores.js
let report_value;

// Subscribing to the report store
report.subscribe(value => {
  report_value = value;
})

// TEST
console.log(report_value)

// let patientbehoeftenText = '[Beschrijving van de patiëntbehoeften]';
// let stoornissenText = '[Beschrijving van de stoornissen]';
// let historieText = '[Beschrijving van de historie]';
// let beperkingenText = '[Beschrijving van de beperkingen]';

// let conclusiesText = '[Beschrijving van de conclusies]';
// let soepText = '[Beschrijving van de SOEP-rapportage]';
// let behandelplanText = '[Beschrijving van het behandelplan]';

// We check to make sure report_value is defined, if so we assign the report text to variables which will be pasted in the text fields
// @ts-ignore is used to suppres the javascript warning saying report_value might be undefined
let patientbehoeftenText;
let stoornissenText;
let historieText;
let beperkingenText;

if(typeof report_value != "undefined"){
  // @ts-ignore
  patientbehoeftenText = report_value.patient_needs_messages;
  // @ts-ignore
  stoornissenText = report_value.disorders_messages;
  // @ts-ignore
  historieText = report_value.medical_history_messages;
  // @ts-ignore
  beperkingenText = report_value.disabilities_messages;
}


//TODO: generating the remaining fields
let conclusiesText = '[Beschrijving van de conclusies]';
let soepText = '[Beschrijving van de SOEP-rapportage]';
let behandelplanText = '[Beschrijving van het behandelplan]';


function handleDemoMessage(event) {
  alert('Demoteksten ingevuld');
  patientbehoeftenText = event.detail.patientbehoeftenMessage;
  stoornissenText = event.detail.stoornissenMessage;
  historieText = event.detail.historieMessage;
  beperkingenText = event.detail.beperkingenMessage;

  conclusiesText = event.detail.conclusiesMessage;
  soepText = event.detail.soepMessage;
  behandelplanText = event.detail.behandelplanMessage;
}


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
  <Row>
  <Col xs='1'>
  </Col>
  <Col>
  <ButtonGroup>
    <Button color={anamneseColor} on:click={openAnamnese}>Anamnese</Button>
    <Button color={conclusiesColor} on:click={openConclusies}>Conclusies</Button>
    <Button color={soepColor} on:click={openSoepRapport}>SOEP-rapport</Button>
    <Button color={behandelplanColor} on:click={openBehandelplan}>Behandelplan</Button>
  </ButtonGroup>
  </Col>
  <Col xs='1'>
  <DemoButton on:message={handleDemoMessage}/>
  </Col>
  </Row>
  </div>

  {#if (currentTab == 'anamnese')}
    <Row>
      <Col>
        <ReportCard titleText='Patiëntbehoeften' bodyText={patientbehoeftenText}/>
      </Col>
      <Col>
      <ReportCard titleText='Stoornissen' bodyText={stoornissenText}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <ReportCard titleText='Historie' bodyText={historieText}/>
      </Col>
      <Col>
      <ReportCard titleText='Beperkingen' bodyText={beperkingenText}/>
      </Col>
    </Row>
  {:else if (currentTab == 'conclusies')}
    <Row>
      <Col xs='2'>
      </Col>
      <Col>
      <ReportCard titleText='Conclusies' bodyText={conclusiesText}/>
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
      <ReportCard titleText='Behandelplan' bodyText={behandelplanText}/>
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

