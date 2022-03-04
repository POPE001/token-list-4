<script>
      import Typewriter from 'svelte-typewriter'
      

</script>

<header class="navbar">
    <section class="navbar-section">
      <a href="..." class="navbar-brand mr-2"><img src="assets/img/logo.png" alt="" srcset=""></a>
      
    </section>
    <section class="navbar-section">
        <button class="btn btn-primary input-group-btn">Join Waitlist</button>
    </section>
  </header>


  <div class="hero bg-white hero-lg">
    <div class="hero-body">
      <div class="content-container">
            <div class="text-container">
                <h1 class="intro">We are building the next <Typewriter loop interval={100}>Big deal on the internet</Typewriter> </h1>
            </div>
        
          <div class="ctl-containers">
            <a class="btn btn-lg btn-primary">White paper</a>
            <a class="btn btn-lg">Learn more</a>

          </div>

          <div class="forms">
            <div class="has-icon-right">
                <input type="text" class="form-input" placeholder="Your Email">
                <i class="form-icon icon"></i>
              </div>
                <button class='btn btn-primary'>Join Waitlist</button>              
          </div>
      </div>
    </div>
  </div>
  