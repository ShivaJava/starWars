<template>
    <div class="PeopleModal">
        <div class="PeopleModal__inner">
            <button class="PeopleModal__closer" @click="$router.go(-1)">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 13L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <AppPreloader v-if="status !== 'success' || status === 'request' "/>
            <slot v-if="status === 'success'">
                <header class="PeopleModal__header">
                    <app-avatar v-bind:man="man"
                        v-bind:bemclass="'PeopleModal__avatar'"/>
                    <h1 class="PeopleModal__name">{{ man.name }}</h1>
                </header>
                <div class="PeopleModal__body">
                    <table class="PeopleModal__table">
                        <tr class="PeopleModal__table-row">
                            <td class="PeopleModal__table-cell">Birth year</td>
                            <td class="PeopleModal__table-cell">{{ man.birth_year }}</td>
                        </tr>
                        <tr class="PeopleModal__table-row">
                            <td class="PeopleModal__table-cell">Gender</td>
                            <td class="PeopleModal__table-cell">{{ man.gender}}</td>
                        </tr>
                    </table>
                </div>
            </slot>
        </div>

        <div class="PeopleModal__back"/>
    </div>
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'
import AppAvatar from '@/components/AppAvatar.vue'

export default {           
    name: 'PeopleModal',
    mounted() {   
        this.$store.dispatch('getMan', this.$route.params.id);
    },
    methods: {
        
    },
    computed: {
        man() {
            return this.$store.getters.getMan;
        },
        status() {
            let status = this.$store.getters.getStatusM;
            return status;
        }
    },
    components: {
        AppPreloader,
        AppAvatar
    }
}
</script>

<style lang="scss" scoped>
    .PeopleModal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 24px;

        &__inner {
            position: relative;
            width: 100%;
            max-width: 800px;
            min-height: 500px;
            background: #1A1A1A;
            border-radius: 8px;
            z-index: 1;
            padding: 24px;
            border: 1px solid rgba(37, 136, 167, 0.18);
            box-shadow: 0px 0px 15px rgba(37, 136, 167, 0.18);
        }

        &__header {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #808080;
            padding: 48px 0;
        }

        &__avatar {
            margin-right: 24px;
        }

        &__name {
            font-size: 18px;
            font-weight: 500;   
            color: #fff;
        }

        &__body {
            padding: 48px 0;
        }

        &__table {

        }

        &__table-row {
            
        }

        &__table-cell {
            width: 40%;
            padding: 16px 8px;
            &:first-child {
                color: #808080;
            }
            &:last-child {
                color: #fff;
                font-weight: 500;
            }
        }

        &__back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(#1A1A1A, 0.96  );
            z-index: 0;
        }

        &__closer {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            background-color: none;
            border: none;
        }
    }
    
</style>