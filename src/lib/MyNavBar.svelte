<script lang="ts">
  import {
    Button,
    Collapse,
    Icon,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';
  import Login from './Login.svelte';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<div>
<Navbar expand="md">
  <NavbarBrand href="/" style="color:#59BF48"><Icon name="bullseye" />1GK</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <!-- <NavItem>
        <NavLink href="#components/">Components</NavLink>
      </NavItem> -->
      <NavItem>
        <NavLink href="https://www.eengroeneknop.nl/">Documentatie</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Help</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!-- <NavItem>
        <Button color="success" outline>Login</Button>
      </NavItem> -->
    </Nav>
  </Collapse>
</Navbar>
</div>
