<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated container style="height:100px">
      <q-toolbar>
        <q-toolbar-title class="padd">Quillionz</q-toolbar-title>
        <q-item clickable tag="a" target="_blank" :href="link" class="paddLr">Teacherss</q-item>
        <q-item clickable tag="a" target="_blank" :href="link" class="paddLr">Students</q-item>
        <q-item clickable tag="a" target="_blank" :href="link" class="paddLr">School</q-item>
        <q-item clickable tag="a" target="_blank" :href="link" class="paddLr">Admin</q-item>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <div class="row padd">
        <div class="col-6"><input class="full-width no-border" placeholder="click to add title"></div>
        <div class="col-3">Express Mode</div>
        <div class="col-3">Select Domain</div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus" scoped>
.padd {
  padding: 40px;
}

.paddLr {
  padding: 0px 35px;
}
</style>
