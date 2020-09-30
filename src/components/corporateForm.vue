<template>
    <div class="form-container">
        <div v-if="sent">
            <p style="font-size: 18px;color:#00d1b2">Thank you for getting in touch!</p>
        </div>
        <form @submit.prevent="onSubmit">
            <animated-input
                    type="text"
                    v-model="formData.name"
                    label="Name"
            ></animated-input>
            <animated-input
                    type="email"
                    v-model="formData.email"
                    label="Email"
                    :required="true"
            ></animated-input>

            <select-field
                    v-model="formData.company"
                    label="Company"
                    :options="companies"
                    :clearable="false"
            />
            <animated-input
                    type="tel"
                    v-model="formData.phone"
                    label="Phone"
            ></animated-input>

            <button class="btn" type="submit">Webinar category</button>
                    </form>

    </div>
</template>

<script>
    import AnimatedInput from "./AnimatedInput";
    import selectField from 'shapla-select-field';
    import {db} from '../firebase';

    const documentPath = 'contacts/portal';

    export default {
        name: "corporateForm",
        components: {
            AnimatedInput,
            selectField
        },
        data() {
            return {
                firebaseData: null,
                formData: {},
                state: 'loading',
                sent: false,
                name: '',
                email: '',
                company: '',
                phone: '',
                companies: ['Finance', 'Human Resource', 'Work Ethics', 'Well Being', 'Counselling', 'Trade', 'Sale', 'Revival'],

            }
        },
        firestore() {
            return {
                firebaseData: db.doc(documentPath),
            }
        },
        methods: {
            async onSubmit() {
                try {
                    await db.doc(documentPath).set(this.formData);
                    this.state = 'synced';
                    this.sent = true,
                        this.formData.name = '';
                    this.formData.email = '';
                    this.formData.company = '';
                    this.formData.phone = '';

                } catch (error) {
                    this.errorMessage = JSON.stringify(error)
                    this.state = 'error';
                }


            }
        },
        created: async function () {
            const docRef = db.doc(documentPath);
            let data = (await docRef.get()).data();
            if (!data) {
                data = {name: '', email: '', company: '', phone: '',}
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
        width:100%;
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