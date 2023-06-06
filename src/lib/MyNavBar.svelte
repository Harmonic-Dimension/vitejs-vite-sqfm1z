<script lang="ts">
  import logoSimple from '../assets/Logo-simple.svg';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
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
  export let newRecording = true;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  function toNew() {
    dispatch('message', {
      text: 'New'
    });
  }

  function toReport() {
    dispatch('message', {
      text: 'Report'
    });
  }

</script>

<div>
<Navbar expand="md">
  <NavbarBrand href="/">bla</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <!-- <NavItem>
        <NavLink href="#components/">Components</NavLink>
      </NavItem> -->
      <NavItem>
        <NavLink on:click={toNew}>Nieuw</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={toReport}>Dossier</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Help</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>Gebruiksinstructie</DropdownItem>
          <DropdownItem>Helpdesk</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="https://www.eengroeneknop.nl/">Website</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!-- <NavItem>
        <Button color="success" outline>Login</Button>
      </NavItem> -->
    </Nav>
  </Collapse>
</Navbar>
</div>
