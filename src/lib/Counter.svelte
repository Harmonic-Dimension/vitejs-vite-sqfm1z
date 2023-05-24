<script>
  import { Button, Col, Row, Icon } from 'sveltestrap';

  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<Row>
  <Col>
    <Button on:click={increment} color="primary" outline><Icon name="globe2"/> count is {count}</Button>
  </Col>
</Row>

