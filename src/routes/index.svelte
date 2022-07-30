<script>
    import Social from "$lib/Social.svelte";
    import Intro from "$lib/Intro.svelte";
    import WhatWeDo from "$lib/WhatWeDo.svelte";
    import GetInTouch from "$lib/GetInTouch.svelte";
</script>

<svelte:head>
    <title>ZOOT Design&trade;</title>
    <meta name="description" content="Welcome to the home of ZOOT.">
</svelte:head>

<header>
    <div><a href="tel:07973788953">07973 788953</a></div>
    <Social />
</header>
<main>
    <Intro />

    <div>
        <h3>Follow</h3>
        <Social />
    </div>

    <GetInTouch />
    <WhatWeDo />
</main>
<footer>
    <div class="copyright">
        <img src="/images/zoot-footer.png" alt="ZOOT">
        <div>
            Copyright Notice.<br>
            &copy; ZOOT Design. All rights reserved.<br>
            Material published by ZOOT Design on these web pages is copyright ZOOT Design and may not be reproduced without permission.
        </div>
    </div>
    <div>
        <img src="/images/footer.png" alt="">
    </div>
</footer>

<style global>
    @import 'ress';

    @font-face {
        font-family: "Lato Light";
        src: url("/fonts/Lato-Light.woff2") format("woff2");
    }

    body {
        font-family: 'Lato Light', lato, sans-serif;
        font-style: normal;
        font-weight: 300;
        background-image: url('/images/spaceman.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    img {
        max-width: 100%;
    }
    h1 {
        margin-bottom: 2rem;
    }
    p, h2, h3 {
        margin-bottom: .5rem;
    }
    main {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 3rem;
        text-align: center;
    }
    header {
        margin-bottom: 2rem;
        padding: 0 1rem;
    }
    header a:first-of-type {
        color: #fff;
        font-size: 1.3rem;
        text-decoration: none;
    }
    header, footer {
        display: flex;
        flex-wrap: wrap;
        background: #000;
        color: #fff;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    footer {
        display: flex;
        flex-wrap: nowrap;
        gap: .5rem;
        padding: 1rem;
        margin-top: 2rem;
    }
    footer .copyright {
        display: flex;
        gap: .5rem;
        font-size: .75rem;
    }
    footer .copyright img {
        align-self: center;
    }
</style>