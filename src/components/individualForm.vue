<template>
    <div class="form-container">
        <div v-if="sent">
            <p style="font-size: 18px;color:#00d1b2">Thank you for getting in touch!</p>
        </div>
        <form @submit="onSubmit">
            <animated-input
                    type="text"
                    v-model="name"
                    label="Name"
                    required="true"
            ></animated-input>
            <animated-input
                    type="email"
                    v-model="email"
                    label="Email"
                    required="true"
            ></animated-input>

            <animated-input
                    type="tel"
                    v-model="phone"
                    label="Phone"
            ></animated-input>

            <button class="btn">Webinar category</button>
        </form>
    </div>
</template>

<script>
    import AnimatedInput from "./AnimatedInput";

    export default {
        name: "individualForm",
        components: {AnimatedInput},
        data() {
            return {
                sent: false,
                name: '',
                email: '',
                phone: '',

            }
        },
        methods: {
            onSubmit(evt) {
                this.sent = true
                evt.preventDefault();
                this.name = '';
                this.email = '';
                this.phone = '';

            }

        }
    }
</script>

<style lang="scss">

</style>