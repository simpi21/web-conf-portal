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

            <select-field
                    v-model="company"
                    label="Company"
                    :options="companies"
                    :clearable="false"
            />
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
    import selectField from 'shapla-select-field';

    export default {
        name: "corporateForm",
        components: {
            AnimatedInput,
            selectField
        },
        data() {
            return {
                sent: false,
                name: '',
                email: '',
                company: '',
                phone: '',
                companies: ['Finance', 'Human Resource', 'Work Ethics', 'Well Being', 'Counselling', 'Trade', 'Sale', 'Revival'],

            }
        },
        methods: {
            onSubmit(evt) {
                this.sent = true
                evt.preventDefault();
                this.name = '';
                this.email = '';
                this.company = '';
                this.phone = '';

            }

        }
    }
</script>

<style lang="scss">
    .form-container {
        margin-top: 50px;
        margin-bottom: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn {
        color: #fff;
        background-color: #00d1b2;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        border-radius: 5px;
        padding: 14px 36px 14px 36px;
        outline: none;
        border: none;
    }

    .has-icons-right .shapla-text-field__input {
        padding-right: 0 !important;
    }

    .shapla-text-field__input {
        padding: 0 !important;
        padding-right: 50px;
        padding-left: 20px;
        width: 100%;
    }

    .shapla-text-field {
        border-radius: 6px;
        border: 2px solid #00d1b2;
    }

    .shapla-select-field {
        margin: 0 auto 20px !important;
        width: 100%;

    }
</style>