<template>
    <article :class="`PeopleCard ${classes}`">
        <router-link class="PeopleCard__inner"
            :to="{name: 'PeopleModal', params: {man, id: man.id} }">
                <app-avatar v-bind:man="man"
                            v-bind:bemclass="'PeopleCard__avatar'"/>
                <h3 class="PeopleCard__title">{{ man.name }}</h3>
        </router-link>
    </article>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue'

export default {
    data() {
        return {
            
        }
    },
    name: 'PeopleCard',
    props: ['classes', 'man', 'link'],
    methods: {
        
    },
    computed: {
        
    },
    components: {
        AppAvatar
    }
}
</script>

<style lang="scss" scoped>
.PeopleCard {
    & * {
        text-decoration: none;
    }
    padding: {
        left: 15px;
        right: 15px;
        bottom: 30px;
    }

    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        min-height: 200px;
        background-color: #1a1a1a;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
        transition: box-shadow .15s;

        &:hover,
        &:focus {
            box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38);
        }
    }

    &__avatar {
        margin-bottom: 15px;
    }

    &__title {
        color: #fff;
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 15px;
    }

    &__species {
        color: #808080;
    }
}
</style>