<script>
  import './firebase.js';
  import { onMount } from 'svelte';

  import svelteLogo from './assets/svelte.svg';
  import egkLogo from './assets/Rec-Button.png';
  import Counter from './lib/Counter.svelte';
  import Login from './lib/Login.svelte';
  import GreenButton from './lib/GreenButton.svelte';
  import MyNavBar from './lib/MyNavBar.svelte';
  import ResultsPage from './lib/ResultsPage.svelte';

  import AudioRecorder from './lib/AudioRecorder.svelte';


  import { Row, Col, Styles } from 'sveltestrap';

  // Importing the api_key which is stored in stores.js after it is entered by the user
  import { api_key } from './stores.js';

  // Importing a variable in which we can store the created report so that ResultsPage can access it
  import { report } from './stores.js';

  let newRecording = true;

  onMount(() => {
    document.body.style.background = 'linear-gradient(231.05deg, #DCDCDC 11.19%, #FFFFFF 84.75%)';
  });

  // 'Report' is sent as dispatch text in two cases: manually when the user clicks on the Report page before having created a report, and 
  // and automatically when a report has been created
  function handleMessage(event) {
    if (event.detail.text == 'New') {
      newRecording = true;
    } else if (event.detail.text == 'Report') {
      newRecording = false;
      if(event.detail.ReportStatus == 'Created'){
        // Storing the report so that ResultsPage can access it
        report.set(event.detail.report);
      }
    };
    }

  // Function that updates the api_key when it is entered in the input field
  function updateApiKey(event) {
    api_key.set(event.target.value);
  }

</script>

<Styles />

<main>

    <Row class='mb-5'>
      <Col>
        <MyNavBar on:message={handleMessage} />
      </Col>
      <Col/>
      <Col>
        <Login />
      </Col>
    </Row>
  
  {#if (newRecording)}
    <Row class="mt-4">
    <Col xs="1">
    </Col>
    <Col>
      <h1 class="landing-header">
      één groene knop
      </h1>
    </Col>
    <Col xs='1'>
    </Col>
    <Col>
    <div>
      {#key newRecording}
      <GreenButton on:message={handleMessage}/>
      {/key}
    </div>
    </Col>
    </Row>
  {:else}
    <ResultsPage />
  {/if}

  <Row>
    <input on:input={updateApiKey}>
  </Row>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #48bf91);
  }
  .read-the-docs {
    color: #888;
  }

  .landing-header {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 5em;
    line-height: 94%;
    /* or 94% */
    text-align: right;
    letter-spacing: -0.021em;

    background: linear-gradient(97.51deg, #B95CDA 10.36%, #7D3496 78.79%, #581270 101.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
</style>
