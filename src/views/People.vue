<template>
  <section class="People">
    <div class="People__preview">
      <app-logo/>
    </div>
    <div class="People__content" >
      <AppPreloader v-if="status !== 'success' || status === 'request' "/>
      <slot v-if="status === 'success'">  
        <people-card 
          v-for="(man, index) in people" 
          v-bind:classes="`People__item`"
          v-bind:man="setMan(index, man)"
          v-bind:key="index"
        >
          {{ man.name }}
        </people-card>
      </slot>
    </div>
    <router-view>
      <!-- here the ItemModal component will be rendered -->
    </router-view>
  </section>
</template>

<script>
// @ is an alias to /src
import PeopleCard from '@/components/cards/PeopleCard.vue'
import AppPreloader from '@/components/AppPreloader.vue'
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'home',
  mounted() {   
    this.$store.dispatch('getPeople');
  },
  computed: {
      people() {
        let people = this.$store.getters.getPeople;     
        return people;
      },
      status() {
        let status = this.$store.getters.getStatusP;
        return status;
      }
  },
  methods: {
    setMan(i, m) {
      let index = i;
      let man = m;
      
      man['id'] = index + 1;
            
      return man;
    },
  },
  components: {
    PeopleCard,
    AppPreloader,
    AppLogo
  }
}
</script>

<style lang="scss">
  .People {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__preview {
      width: 100%;
      flex: 0 0 480px;
      background-image: url(../assets/AppHeader__bg.png);
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex: 1 1 auto;
      padding: 30px 9px;

      @media (min-width: 1200px) {
        padding: 30px 0;
        max-width: 1200px;
        margin: 0 auto;
      }
    }

    &__item {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex: 0 0 50%;
      }
    }
    
  }
</style>