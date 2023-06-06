<script>
  import './firebase.js';
  import { onMount } from 'svelte';


  import favicon from './assets/Favicon.svg';
  import egkLogo from './assets/Rec-Button.png';
  import Counter from './lib/Counter.svelte';
  import Login from './lib/Login.svelte';
  import GreenButton from './lib/GreenButton.svelte';
  import MyNavBar from './lib/MyNavBar.svelte';
  import ResultsPage from './lib/ResultsPage.svelte';

 // import AudioRecorder from './lib/AudioRecorder.svelte';


  import { Row, Col, Styles } from 'sveltestrap';

  let newRecording = true;

  onMount(() => {
    document.body.style.background = 'linear-gradient(231.05deg, #DCDCDC 11.19%, #FFFFFF 84.75%)';
  });

  function handleMessage(event) {
    if (event.detail.text == 'New') {
      newRecording = true;
    } else if (event.detail.text == 'Report') {
      newRecording = false;
    };
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
    <Col xs="2">
    </Col>
    <Col>
      <h1 class="landing-header">
      één <span class='highlight'>groene</span> knop
      </h1>
    </Col>
    <Col xs='2'>
    </Col>
    <Col>
    <div>
      {#key newRecording}
      <GreenButton />
      {/key}
    </div>
    </Col>
    </Row>
  {:else}
    <ResultsPage />
  {/if}

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
    font-family: 'Work sans';
    font-style: normal;
    font-weight: 300;
    font-size: 5em;
    line-height: 94%;
    /* or 94% */
    text-align: right;
    letter-spacing: -0.021em;

  }

  .highlight {
  background-color: #48BF91;
  color: #ffffff;
}

</style>
