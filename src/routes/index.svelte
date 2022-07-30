<script>
    // contact form js

    // import 'ress';
</script>

<header>
    <div><a href="tel:07973788953">07973 788953</a></div>
    <ul class="social">
        <li><img src="/images/behance.png" alt="Behance"></li>
        <li><img src="/images/pinterest.png" alt="Pinterest"></li>
        <li><img src="/images/facebook.png" alt="Facebook"></li>
        <li><img src="/images/twitter.png" alt="Twitter"></li>
    </ul>
</header>
<main>
    <h1><img src="/images/zoot.png" alt="ZOOT Design"></h1>
    <h2>New Website Coming Soon</h2>
    <p>Are you lost in space? Burning in the dark alone, perhaps we can help those flames flourish into a burning light to capture the attentions of your designated audience? If you would like to discuss a way to control those flames get in touch by filling out the form below or stay in touch by following us...</p>

    <div>
        <h3>Follow</h3>
        <ul class="social">
            <li><img src="/images/behance.png" alt="Behance"></li>
            <li><img src="/images/pinterest.png" alt="Pinterest"></li>
            <li><img src="/images/facebook.png" alt="Facebook"></li>
            <li><img src="/images/twitter.png" alt="Twitter"></li>
        </ul>
    </div>

    <h2>Get in Touch</h2>
    <p>If you would like us to quote on a particular project or if you would like to discuss the potential of a project with us or perhaps you have a question on one of our services if so, fill out the form below and we will get back to you promptly with a reply and or an answer...</p>

    <!-- Form -->

    <h2>What We Do</h2>
    <p>Read more about what we do perhaps we are exactly what you are looking for...</p>

    <div class="whatwedo">
        <div>
            <img src="/images/pencil.png" alt="pencil">
            <h3>Bespoke Graphic Design</h3>
            <p>Anyone can buy images and move them around on a screen, that's easy.</p>
            <p>But to have the creative know-how to implement your vision with pixel perfect clarity and deliver it to your target audience takes experience and skill and we have oodles of it at ZOOT.</p>
        </div>
        <div>
            <img src="/images/mouse.png" alt="mouse">
            <h3>Website and Online Design</h3>
            <p>A web presence is essential, it's your shop window, it's an invitation and a call to action.</p>
            <p>A website is the hub of any business in the 21st century and should be designed to give an ultimate user experience. We can help plan and develop that experience to a professional standard.</p>
        </div>
        <div>
            <img src="/images/phone.png" alt="phone">
            <h3>Device Apps</h3>
            <p>Most phones run apps, cool apps, informative apps, quirky apps, convenience apps.</p>
            <p>Apps are pocket sized packages of convenience that fit snuggly into our lives aiding us with day to day information, if you have an app idea, let us help you develop it.</p>
        </div>
    </div>
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

    main {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
    }
    header, footer {
        background: #000;
        color: #fff;
        padding: 1rem;
    }
    header {
        margin-bottom: 2rem;
    }
    header a:first-of-type {
        color: #fff;
        font-size: 1.3rem;
        text-decoration: none;
    }
    header, footer, .whatwedo {
        display: flex;
    }
    header, footer {
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    footer {
        margin-top: 2rem;
    }
    footer .copyright img {
        align-self: center;
    }
    footer .copyright {
        display: flex;
        gap: .5rem;
        font-size: .75rem;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    ul li {
        display: inline-block;
    }
</style>