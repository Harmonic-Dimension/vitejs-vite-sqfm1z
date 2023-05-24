<script>
  import './firebase.js';

  import svelteLogo from './assets/svelte.svg';
  import egkLogo from './assets/Rec-Button.png';
  import Counter from './lib/Counter.svelte';
  import Login from './lib/Login.svelte';
  import GreenButton from './lib/GreenButton.svelte';
  import MyNavBar from './lib/MyNavBar.svelte';
  import AudioRecorder from './lib/AudioRecorder.svelte';


  import { Row, Col, Styles } from 'sveltestrap';
</script>
<Styles />

<main>
  <MyNavBar />
  <!-- <div>
    <img src={egkLogo} class="logo" alt="1GK Logo" />
    <h2> 1gk test 7</h2>
  </div> -->

  <Row>
    <Col/>
    <Col/>
    <Col>
      <Login />
    </Col>
  </Row>


  <div>
    <GreenButton />
  </div>
  <div>
    <AudioRecorder />
  </div>

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
</style>
