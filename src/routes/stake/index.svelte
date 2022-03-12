<script>
      import { Splide, SplideSlide } from '@splidejs/svelte-splide';arguments
      import '@splidejs/splide/dist/css/splide.min.css';
      import Chart from "../../components/chart.svelte"      
     
    
      let active = 0.0
      let startMining = true;
  
      const Start = ()=>{
          startMining = true;
      }

      const Off = ()=>{
          startMining = false;
      }
        
      let options = {
        rewind      : true,
        autoplay    : true,
        pauseOnHover: true,
        // arrows      : 'slider',
        // height      : '15rem',
  }



  let epoch = 0
  function TimeCounter(){
    // do whatever you like here
    active+=0.5
    epoch = performance.now()
    setTimeout(TimeCounter, 1000);
}

if(startMining){TimeCounter()}


</script>
<svelte:head>
    <title>UREP | DASHBOARD</title>
</svelte:head>

<aside class="sidebar">
    <div class="sidebar-links">
        <a href="">
            <i class='bx bx-home'></i>
        </a>
        <a href=""><i class='bx bx-git-compare' ></i></a>

        <a href="">
            <i class='bx bx-wallet' ></i>
        </a>

    </div>

    <a href="">
        <i class='bx bxs-door-open' ></i>
    </a>
</aside>

<div class="dashboard-container">
    <div class="columns">
        <div class="column">
            <div class="elevate earning-card">
                <div class="chart">
                   <Chart active={active} ></Chart>
                </div>
                <div class="earning-ctl gap">
                    <div class="flex gap">
                        <h4 class="currency">SOL</h4>
                        <h4 class="amount">0.00000000</h4>
                    </div>
                    <div class="flex gap">
                        <h4 class="currency">UREP</h4>
                        <h4 class="amount">0.00000000</h4>
                    </div>
                    <div class="flex gap">
                        <strong>Package</strong>
                        <strong>Louverture 1</strong>
                    </div>
                    <div class="live-reward">
                        <strong class='amount'>{epoch}</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="validator-container">

                        
                    
                        <Splide options={options}>
                            <SplideSlide>
                                <div class="validator-card">
                                    <img src="assets/img/slider/1.svg" alt="" srcset="">
                                    <div class="caption">
                                        <h3 class="title">Get reward for your contribution</h3>
                                        <a href="" class="btn sm-btn">Join UREP</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div class="validator-card">
                                    <img src="assets/img/slider/2.svg" alt="" srcset="">
                                    <div class="caption">
                                        <h3 class="">Next generation yield farming</h3>
                                        <a href="" class="btn sm-btn">Join pool</a>
                                    </div>
                                    
                                </div>
                            </SplideSlide>
                           
                           
                          </Splide>
                  
        
                        <div class="scroller">
                            <div class="node-card">
                                <img src="assets/img/small.png" alt="">
                                    <h5 class="title">Louverture 1 </h5>
                                    <div class="rate-card">
                                        <strong>0.6574 / sec</strong>
                                    </div>
                                    {#if startMining}
                                    <a on:click="{Start}" class="btn sm-btn">Disconnect node</a>
                                    {:else}
                                        <a on:click="{Off}" class="btn sm-btn">Join node</a>
                                    {/if}
                            </div>
            
                            <div class="node-card">
                                <img src="assets/img/small.png" alt="">
                                    <h5 class="title">HChristophe 2 </h5>
                                    <div class="rate-card">
                                        <strong>0.9574 / sec</strong>
                                    </div>
            
                                    <a href="" class="btn sm-btn">Join node</a>
                            </div>


                            <div class="node-card">
                                <img src="assets/img/small.png" alt="">
                                    <h5 class="title">JJDesssaline 3 </h5>
                                    <div class="rate-card">
                                        <strong>0.11574 / sec</strong>
                                    </div>
            
                                    <a href="" class="btn sm-btn">Join node</a>
                            </div>
            
                            
                        </div>
            </div>
        </div>
    </div>



    <div class="elevate pool-container">
        <header class="pool-container-header">
            <h1 class="pool-text-header">Staking Pools</h1>
        </header>
        <div class="pool-inner-container">
            <h3>Unstaked SOL</h3>
            <div class="staked-balance">
                <img src="assets/solana-logo.svg" alt="">
                <h6>N/A</h6>
            </div>
                <a href="" class=" btn urepctl ">Deposit to pool</a>
        </div>

        <div class="pool">
         <div>
            <table class='pool-table'>
                <tr>
                  <th>Pool</th>
                  <th>APY</th>
                  <th>Balance</th>
                  <th>Share</th>
                  <th>Pool balance</th>
                </tr>
                <tr>
                  <td>
                      <div class="pool-name">
                        <img src="assets/img/small.png" alt="" srcset="">
                          <h6>UREP Pool</h6>
                      </div>
                  </td>
                  <td>7.5%</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td> 
                      <div class="withdraw-container"><a href="" class="sm-btn btn">Withdraw</a></div>
                  </td>
                </tr>
              </table>
         </div>

        </div>
    </div>
</div>

<style>
    
    .sidebar{
        left: 0;
        height: 100vh;
        width: 3rem;
        background-color: white;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: .75rem;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);

    }

    .sidebar-links{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .75rem;
        height: 20rem;
    }
    .sidebar-links a{
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }
    .sidebar-links a i{
        font-size: 44px;
        font-weight: bold;
        color: var(--urep_purple);
    }
    .dashboard-container{
        left: 3rem;
        top: 5;
        position: fixed;
        width: 100%;
        height: 100%;
        padding:5rem;
        overflow-y: scroll;
        overflow-x: hidden;
        z-index: -2;
    }

    .earning-card{
        height: 15rem;
        width: 25rem;
        border-radius: 8px;
        background-color: white;
        display: flex;
        padding: .75rem;
    }
    .validator-container{
        background-color: whitesmoke;
        height: 15rem;
        width: 25rem;
        border-radius: 8px;
        padding: .75rem;
        display: flex;
        flex-direction: column;
        gap: .75rem;
    }

    .validator-card{
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        height: 6rem;
        width: 100%;
        background-color: white;
        display: flex;
        gap: .75rem;
    }
    .validator-card img{
        max-height: 100%;
        max-width: 50%;
    }

    .mySwiper{
        position: relative;
    }

    .node-card{
        background: #FFFFFF;
        border-radius: 8px;
        display: flex;
        height: 3rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: .75rem;
    }
    .node-card img{
        height: 1rem;
        width: 1rem;
        clip-path: circle();
    }

    .pool-container{
        background-color: white;
        display: flex;
        flex-direction: column;
        height: 19rem;
        width: 100%;
        padding: .75rem;
        margin-top: 1rem;
    }

    .pool-container-header{
        height: 2.5rem;
        width: 100%;
        border-bottom: solid thin var(--urep_purple);
    }

    .pool-text-header{
        text-align: left;
        font-size: xx-large;
        font-weight: bolder;
        color: var(--urep_purple);
    }
    .pool-inner-container{
        background-color: var(--urep_blue) ;
        height: 7rem;
        margin-top: .75rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .staked-balance{
        display: flex;
    }
    .staked-balance img{
        clip-path: circle();
        height: 1rem;
        width: 1rem;
    }
    .pool{
        margin-top: .75rem;
        width: 100%;
        padding: .75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 6rem;
        border: var(--urep_purple) solid thin;
        border-radius: 8px;
    }
    
    .pool-name{
        display: flex;
    }
    .pool-name img{
        height: 1rem;
        width: 1rem;
        clip-path: circle();
    }
    .pool-table{
        width: 100%;
    }
    th{
        color: var(--urep_purple);
        padding-bottom: 1rem;
    }
    table, th, td {
        text-align:left;}
    tr{
        padding-bottom: 1.75rem;
    }

    .sm-btn{
        background-color: var(--urep_purple);
        height: 2rem;
        width: 5rem;
        text-align: center;
        color: white;
        border-radius: 8px;
    }
    .caption{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rate-card{
        background-color: var(--urep-light-pink);
        border-radius: 9px;
        width: 6rem;
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--urep_purple);        
    }

    .chart{
        margin-top: .75rem;
        max-height: 100%;
        max-width: 50%;
    }


    .scroller{
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .earning-ctl{
        display: flex;
        flex-direction: column;

    }
    .flex{
        display: flex;
    }
    .currency{
        font-weight: bold;
        color: var(--urep_purple);
    }
    .amount{
        color: var(--urep_blue);
    }
    .live-reward{
        height: 2rem;
        max-width: 100%;
        border: var(--urep_purple) solid thin;
        border-radius: 8px;
        padding: .75rem;
        display: flex;
        justify-items: center;
        align-items: center;
    
    }
    </style>