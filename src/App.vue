<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" v-touch-swipe.horizontal.scroll="swipePage">
    <q-layout ref="layout" view="hHr LpR lFf" >
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          APPIER NEW YEAR
          <span slot="subtitle">{{title}}</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Left Side Panel-->
      <div slot="left">
        <q-item >
         <!-- using it as QItem in this particular example -->
         <q-item-side icon="rss feed" />
         <q-item-main label="Twitter" sublabel="@quasarframework" />
       </q-item>
        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>
          <q-item>
            <q-item-side icon="school" />
            <q-item-main label="Docs" sublabel="quasar-framework.org" />
          </q-item>
          <q-item>
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
          </q-item>
          <q-item>
            <q-item-side icon="chat" />
            <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
          </q-item>
          <q-item>
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework" />
          </q-item>
        </q-list>
      </div>

         <main class="transition-generic">
           <router-view></router-view>
         </main>

       <!-- Navigation Tabs -->
       <q-tabs slot="footer" align="justify"  position="bottom">
         <q-route-tab slot="title" @click="changeTab('Fotos')"  exact icon="view_day" to="/" replace  label="Fotos" />
         <q-route-tab slot="title" @click="changeTab('Camara')" exact icon="camera_alt" to="/camera" replace label="Camara" />
         <q-route-tab slot="title" @click="changeTab('Notificações')" exact icon="view_day" to="/about" replace label="Tabs" />
       </q-tabs>

      <!--<q-toolbar slot="footer">
         <router-link class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/camera">
          <i class="material-icons">camera_alt</i>
        </router-link>
      </q-toolbar>-->

    </q-layout>
  </div>
</template>


<script>
/*
 * Root component
 */
import { TouchSwipe, QTabs, QTab, QBtn, QLayout, QToolbar, QToolbarTitle, QRouteTab, QList, QItem, QItemSide, QListHeader, QItemMain, QIcon } from 'quasar'

export default {
  directives: {
    TouchSwipe
  },
  components: {
    QTabs,
    QTab,
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QRouteTab,
    QList,
    QItemSide,
    QListHeader,
    QItem,
    QItemMain,
    QIcon
  },
  methods: {
    swipePage: function (obj) {
      console.log(obj.direction) // "right"
      console.log(obj.duration) // 78
      console.log(obj.distance.x) // 273
      console.log(this.$router.currentRoute.name, this.$refs.layout)
      // console.log(this.title.history.current.name)
      // this.title = this.$router.currentRoute.name
    },
    changeTab (name) {
      console.log('test', name)
      this.title = name
    // this.$refs.layout.hideCurrentSide(() => {
    // this.$router.push('/about')
    //  })
    }
  },
  data () {
    return {
      title: this.$router.currentRoute.name
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary
</style>
