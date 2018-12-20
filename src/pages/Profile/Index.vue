<template>
    <div class="section">
        <div class="ava">{{initials}}</div>
        <section class="content">
            <aside class="field">
                <div class="field-name">First name:</div> 
                <span class="field-value">{{user.firstName}}</span>
            </aside>
            <aside class="field">
                <div class="field-name">Last name:</div>
                <span class="field-value">{{user.lastName}}</span>
            </aside>
            <aside class="field">
                <div class="field-name">Username:</div>
                <span class="field-value">{{user.username}}</span>
            </aside>
            <aside class="field">
                <div class="field-name">Adress:</div>
                <span class="field-value">{{user.adress}}</span>
            </aside>
            <section class="card">
                <div>Карта: {{user.accumulationСardProcent}}%</div>
                <div>Накопительная сумма: {{user.accumulationTotal.toFixed(2)}} рублей</div>
            </section>
        </section>
    </div>
</template>

<script>
import { getUser } from "../../core/api"
import { getUser as getFromLocalUser} from "../../utils/local"

export default {
    name: 'Profile',
    data() {
        return {
            initials: '',
            user: {
                firstName: null,
                lastName: null,
                username: null,
                adress: null,
                accumulationСardProcent: 0,
                accumulationTotal: 0
            }
        }
    },
    methods: {
        onInitials(data) {
            const acronym = data.split(/\s/).reduce((response, word) => {
                let acr = response;

                acr += word.slice(0, 1);

                return acr;
            }, '');

            this.initials = acronym.length > 2 ? acronym.slice(0, 1) : acronym;
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            const user = getFromLocalUser();
            getUser(user.id)
                .then((user) => {
                    this.user = user.data
                    this.onInitials(this.user.firstName + " " + this.user.lastName)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    },
}
</script>

<style lang="scss" scoped>
 .section {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .content {
     display: flex;
     flex-direction: column;
     margin-top: 22px;
     width: 100%;
 }
 .ava {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 52px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #00d1b2;
    color: #fff;
 }

 .field {
     display: flex;
     width: 100%;
 }

 .field-name {
     width: 30%;
     font-weight: 700;
 }

 .field-value {
     width: 70%;
 }

 .card {
    border-radius: 8px;
    height: 130px;
    background-color: #1abc9c;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 }
</style>
