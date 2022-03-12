<script>
    import { page } from "$app/stores";
    import Modal from "../components/modal.svelte";
    import { HandleModal } from "$lib/modal";

    const ChooseWallet= ()=>{
        HandleModal('walletmodal')
    }

    const CloseModal = ()=>{
        HandleModal('walletmodal')
    }
</script>
<header class="urep-navbar elevate">
    <a href="" class="navbar-brand mr-2"><img src="assets/img/small.png" alt="" srcset=""></a>
{#if $page.url.pathname == '/'}
 <div class="nav-link">
   <a href="">Services</a>
   <a href="">Minners</a>
   <a href="">Contact</a>
 </div>
 {/if}

{#if $page.url.pathname == '/stake'}
    <a href="/stake" class="btn urepctl hide-mobile" on:click="{ChooseWallet}">Connect Wallet</a>
{/if}

{#if $page.url.pathname == '/'}
    <a href="/stake" class="btn urepctl hide-mobile">Start Staking</a>
{/if}
 <div class="mobile-nav show-mobile">
    <i class='bx bx-menu'></i>
 </div>
</header>
<slot></slot>

<Modal id='walletmodal' title='Select Wallet' on:clicked={CloseModal}>
    <div class="flex gap column">
        <div class="list-item gap-between">
            <img src="assets/img/phantom.png" alt="" srcset="">
            <h4>Phantom wallet</h4>
            <button class="btn">Select</button>
        </div>
    </div>
</Modal>