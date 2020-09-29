<template>
    <div class="">
        <svg id="wavy-header" viewBox="0 0 761 117" fill="none" preserveAspectRatio="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M224.211 115.669C47.737 120.607 0 76 0 76V0h761v92c-112.975-8.266-183.614-38.828-386.942 2.247-51.942 10.493-77.912 15.739-99.206 18.17-21.294 2.43-31.076 2.704-50.641 3.252z"
                  fill="#00d1b2"/>
        </svg>
        <div class="container">
            <div class="title">
                Conference Portal
            </div>
            <div class="conf-wrapper">
                <div onclick="location.href='https://zoom.us'"  target="_blank" rel="noopener noreferrer" class="conf">
                    <img alt="Zoom" src="https://media.trustradius.com/product-logos/Vn/5f/JJQC92U6VWBP-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Zoom
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://www.teamviewer.com'" class="conf">
                    <img alt="TeamViewer"
                         src="https://media.trustradius.com/product-logos/5v/PN/4ZAW7KOFDJ2B-180x180.JPEG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Team Viewer
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://www.skype.com'" class="conf">
                    <img alt="Skype" src="https://media.trustradius.com/product-logos/Oi/iS/FCFVWJ699QTI-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Skype
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://hangouts.google.com/'" class="conf">
                    <img alt="GoogleHangouts"
                         src="https://media.trustradius.com/product-logos/RG/TN/V7CU4PUGSQ69-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Google Hangouts
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://www.globalmeet.com/login/'" class="conf">
                    <img alt="GlobalMeet"
                         src="https://media.trustradius.com/product-logos/jM/oU/2K7CRNBH3T71-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Global Meet
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://meet.google.com/'" class="conf">
                    <img alt="GoogleMeet"
                         src="https://media.trustradius.com/product-logos/uw/hP/RL4ZDKGG9SZ0-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Google Meet
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://clickmeeting.com/'" class="conf">
                    <img alt="ClickWebinar"
                         src="https://media.trustradius.com/product-logos/ZW/JG/CBTVP6C660RW-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Click Webinar
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://appadvice.com/app/zeen-video-conferencing/1111443310'"
                     class="conf">
                    <img alt="Zeen" src="https://media.trustradius.com/product-logos/Ya/Zo/H39OZTVOT2LU-180x180.JPEG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Zeen
                        </div>
                    </div>
                </div>
                <div onclick="location.href='https://www.webex.com/'" class="conf">
                    <img alt="Webex" src="https://media.trustradius.com/product-logos/gO/AG/TXG7TZILI5VU-180x180.PNG">
                    <div class="text-wrapper">
                        <div class="conf-title">
                            Webex Meetings
                        </div>
                    </div>
                </div>
            </div>

            <button class="webinar-btn" @click="seen = !seen">Promote a webinar</button>

            <div class="radio-btn-wrapper" v-if="seen">
                <div>
                    <shapla-radio
                            v-for="_option in categories"
                            :key="_option.value"
                            v-model="category"
                            :label="_option.label"
                            :value="_option.value"
                    ></shapla-radio>
                </div>
                <div v-show="category === 'corporate'">
                    <corporate-form></corporate-form>
                </div>
                <div v-show="category === 'individual'">
                    <individual-form></individual-form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import shaplaRadio from 'shapla-radio';
    import CorporateForm from "./components/corporateForm";
    import IndividualForm from "./components/individualForm";

    export default {
        name: 'App',
        components: {
            IndividualForm,
            CorporateForm,
            shaplaRadio,
        },
        data() {
            return {
                seen: false,
                category: '',
                categories: [
                    {label: 'Corporate ', value: 'corporate'},
                    {label: 'Individual', value: 'individual'},
                ],
            }
        }
    }
</script>

<style>

    #wavy-header {
        max-height: 20vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }


    .title {
        text-align: center;
        font-size: 32px;
        margin-top: 24px;
        margin-bottom: 70px;
        font-weight: 700;
        color: #fff;
    }

    @media only screen and (max-width: 769px) {
        #wavy-header {
            min-height: 15vh;
        }

        .title {
            font-size: 24px;
            margin-top: 18px;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 900px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;

    }

    .conf-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }

    .conf {
        position: relative;
        overflow: hidden;
        max-width: 100%;
        cursor: pointer;
        width: 120px;
        height: 120px;
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);
    }

    .conf img {
        display: block;
        width: 80px;
    }

    .text-wrapper {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
    }

    .conf-title {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        color: #fff;
        opacity: unset;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .conf:hover .text-wrapper {
        opacity: 1;
    }

    .conf:nth-child(1) {
        background: #fff;
    }

    .conf:nth-child(2) {
        background: #076BCD;

    }

    .conf:nth-child(3) {
        background: #00AFF0;

    }

    .conf:nth-child(4) {
        background: #fff;

    }

    .conf:nth-child(5) {
        background: #FF7715;

    }

    .conf:nth-child(6) {
        background: #117C72;

    }

    .conf:nth-child(7) {
        background: #6FC03C;

    }

    .conf:nth-child(8) {
        background: #A07CFC;

    }

    .conf:nth-child(9) {
        background: #fff;
    }


    .radio-btn-wrapper {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .webinar-btn {
        box-sizing: border-box;
        background-color: #fff;
        border: 2px solid #00d1b2 !important;
        border-radius: 0.6em;
        color: #00d1b2;
        cursor: pointer;
        display: flex;
        align-self: center;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1;
        margin-top: 50px;
        padding: 1em 2.6em;
        text-align: center;
    }

    @media only screen and (max-width: 769px) {
        .webinar-btn {

            font-size: 0.7rem;
        }
    }
    .webinar-btn:hover, .webinar-btn:focus, .webinar-btn:focus {
        background: #00d1b2;
        color: #fff;
        border: 2px solid #00d1b2 !important;
        outline: none;
    }

</style>
