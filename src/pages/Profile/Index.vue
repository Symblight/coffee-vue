<template>
    <div class="section">
        <div class="ava">IK</div>
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
            <div>Карта: 10%</div>
            <div>Накопительная сумма: 0 рублей</div>
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
            user: {
                firstName: null,
                lastName: null,
                username: null,
                adress: null,
            }
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            const user = getFromLocalUser();
            getUser(user.id)
                .then((user) => {
                    this.user = user.data
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
</style>
