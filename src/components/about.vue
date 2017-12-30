<template>
  <!-- Configure "view" prop for QLayout -->
    <q-layout ref="layout" view="hHr LpR lFf" >
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          About
          <span slot="subtitle">Optional subtitle</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Navigation Tabs -->
      <q-tabs slot="navigation" align="justify">
        <q-route-tab slot="title" icon="view_day" to="/" replace  label="Toolbar" />
        <q-route-tab slot="title" icon="view_quilt" to="/about" replace label="About" />
        <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
        <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
      </q-tabs>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
    </q-tabs>
    -->

    <!-- Left Side Panel
    <div slot="left">
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
    -->

    <!-- Right Side Panel
    <div slot="right">
      ...
    </div>
    -->

    <router-view />

    <!-- Footer
    <q-toolbar slot="footer">
      ...
    </q-toolbar>
    -->
  </q-layout>
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
    return {}
  }
}
</script>

<style>
</style>
