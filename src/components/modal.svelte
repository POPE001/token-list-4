<script>
    import {createEventDispatcher} from 'svelte';
    const dispatcher = createEventDispatcher()
    export let title
    export let id
    
</script>

<div class="modal" id="{id}">
    <a   class="modal-overlay" aria-label="Close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a on:click="{()=>{dispatcher('clicked')}}" href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
        <div class="modal-title h5">{title}</div>
      </div>
      <div class="modal-body">
        <div class="content">
            <slot></slot>
        </div>
      </div>
    </div>
  </div>