<template>
    <div>
        Profile
        <strong>Name: {{user.first_name}}</strong>
        <strong>Last name: {{user.last_name}}</strong>
        <strong>adress: {{user.adress}}</strong>
    </div>
</template>

<script>
import { getUser } from "../../core/api";

export default {
    name: 'Profile',
    props: ['id'],
    data() {
        return {
            user: {
                first_name: null,
                last_name: null,
                middle_name: null,
                username: null,
                adress: null,
            }
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            getUser(this.id)
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
