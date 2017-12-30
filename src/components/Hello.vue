<template>
  <div class="layout-page-container layout-padding page-showcase">
    <div class="showcase-top text-center">
      <img src="../assets/quasar-logo-full.svg" />

      <p class="caption">
        Use sidebar to browse through demos, which showcase only a few of the Quasar components and features.
        <br>
        For a full list, visit the documentation website.
      </p>
    </div>
  </div>
</template>

<script>
import { QTabs, QTab, QBtn, QLayout, QToolbar, QToolbarTitle, QRouteTab, QList, QItem, QItemSide, QListHeader, QItemMain, QIcon } from 'quasar'
export default {
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
  data () {
    return {
      // initializing for second tab to be selected by default
      // selectedTab: 'tab-2'
    }
  },
  methods: {
    selectThirdTab () {
      // we select third tab which has `name` set to 'tab-3'
      this.selectedTab = 'tab-3'
    },
    navigate () {
    // this.$refs.layout.hideCurrentSide(() => {
    // this.$router.push('/about')
    //  })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.page-showcase
  img
    width 100px
    height 100px
    margin-bottom 15px
  .showcase-top
    margin-bottom 35px
    .q-alert
      max-width 500px
  .card
    cursor pointer
    position relative
    padding 16px
    .q-icon
      font-size 56px
    p
      color rgba(0, 0, 0, .87)
      margin 15px 0 0 0 !important
    &:before
      content ''
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      border-radius 2px
      opacity 0
      transition opacity .2s
      background currentColor
    &:hover:before
      opacity .4
</style>
