<script>
    let state = '';

    const submitForm = async (data) => {
        state = 'submitting';
        const formData = new FormData(data.currentTarget);
        const response = await fetch('contact', {
            method: 'POST',
            body: formData,
        });

        try {
            const { message } = await response.json();
            state = message;
        } catch (error) {
            if (error) {
                console.log(error);
                state = 'error';
            }
        }
    }
</script>

<div class="getintouch">
    <h2>Get in Touch</h2>
    <p>If you would like us to quote on a particular project or if you would like to discuss the potential of a project with us or perhaps you have a question on one of our services if so, fill out the form below and we will get back to you promptly with a reply and or an answer...</p>

    <div class="form-container">
        {#if !state}
            <form on:submit|preventDefault="{submitForm}">
                <input type="text" name="name" placeholder="Name:*" required>
                <input type="text" name="company-name" placeholder="Company Name:">
                <input type="text" name="email" placeholder="Email:*" required>
                <input type="text" name="number" placeholder="Telephone Number:">
                <div>
                    <textarea name="comments">Additional Comments:</textarea>
                    <input type="submit" value="Send request">
                </div>
            </form>
        {:else if state === 'submitting'}
            <div class="form-status submitting">
                Sending...
            </div>
        {:else if state === 'success'}
            <div class="form-status success">
                Message sent successfully.
            </div>
        {:else if state === 'error'}
            <div class="form-status error">
                Error sending message. Please try again or give us a call.
            </div>
        {/if}
    </div>
</div>

<style>
    .getintouch {
        margin: 2rem 0;
    }
    .form-container {
        margin-top: 2rem;
    }
    form {
        display: flex;
        flex-wrap: wrap;
    }
    form input, 
    form textarea {
        flex: 1 1 calc(50% - .8rem);
        background: rgba(0,0,0,0.6);
        color: #fff;
        padding: .8rem .5rem;
        font-size: .9rem;
        width: 100%;
    }
    form > div,
    form input:not(input[type=submit]) {
        margin: 0 .4rem .6rem .4rem;
        width: 100%;
    }
    form ::placeholder {
        color: #fff;
    }
    form input[type=submit] {
        background-color: #000;
        padding: .8rem 1.5rem;
        margin-top: .5rem;
        text-transform: uppercase;
        width: auto;
    }
    .form-status {
        background: rgba(0,0,0,0.6);
        color: #fff;
        padding: 2rem;
        text-align: center;
    }
</style>