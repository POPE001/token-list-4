<script>
      import Typewriter from 'svelte-typewriter'
      
      import { fade, fly } from 'svelte/transition';
      import 'animate.css';

</script>

<svelte:head>
  <title>UREP | HOME</title>
</svelte:head>


  <div class="hero bg-white hero-lg">
    <div class="hero-body">
      <div class="urep-container">
        <div class="columns">
          
          <div class="column">
            <div class="list-container">
              <h1  class="hide-mobile intro animate__backInLeft">Stake Your Sol 
                <br> on the Universal <br> Repvblik Network</h1>
                <h1  class="show-mobile intro animate__backInLeft">Stake Your Sol 
                  on the Universal Repvblik Network</h1>
              <div class="columns gap">
                <a href="" class="btn urepctl">Get started</a>
                <a href="" class="btn urep-secondary">Learn more</a>
              </div>
            </div>
          </div>

          <div class="column sm-grow">
            <div class="card">
      
              <div class="card-header">
                <div class="card-title h5">Converter</div>
                <div class="card-subtitle text-gray">Urep token converter</div>
              </div>
              <div class="card-body">
                <div class="list-container">
                  <div class="input-container">
                    <div class="drop-dopdown-container">
                      <i class='bx bx-caret-down'></i>

                      <img src="assets/img/small.png" alt="" srcset="">
                    </div>
                    <input type="text" placeholder="Amount">
                  </div>
                  <div class="input-container">
                    <div class="drop-dopdown-container">
                      <i class='bx bx-caret-down'></i>

                      <img src="assets/solana-logo.svg" alt="" srcset="">
                    </div>
                    <input type="text" placeholder="Amount">
                  </div>

                  <button class="btn urepctl slim-btn">Convert</button>


                </div>
              </div>
           
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  