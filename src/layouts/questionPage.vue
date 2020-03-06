<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated container style="height:100px">
      <q-toolbar>
        <q-toolbar-title class="padd">Quillionz</q-toolbar-title>
           <HeaderElement
          v-for="elem in headerElements"
          :key="elem.title"
          :title="elem.title"
          :icon="elem.icon"
          :bind="elem"
        />
         <q-expansion-item
         switch-toggle-side
         expand-separator
         icon="perm_identity"
         label="User"
         >
         </q-expansion-item>
        <q-item clickable v-ripple @click="toggleDrawer()">
        <q-item-section avatar>
          <q-icon color="black" size="xl" name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawerOpen" side="right" bordered>
      <q-list>
      <RightDrawerList
      v-for="title in rightDrawerList"
      :key="title"
      :name="title"
      :v-bind="title"
      />
      </q-list>
    <!-- drawer content -->
    </q-drawer>
    <!-- Page Body -->
    <q-page-container>
         <router-view>
         </router-view>
    </q-page-container>
    <add-text-footer></add-text-footer>
  </q-layout>
</template>

<script>
import HeaderElement from 'components/headerElement.vue'
import RightDrawerList from 'components/rightDrawerList.vue'
import AddTextFooter from 'components/addQuestionPageFooter.vue'

export default {
  components: {
    HeaderElement,
    RightDrawerList,
    AddTextFooter
  },
  methods: {
    toggleDrawer () {
      this.drawerOpen ? this.drawerOpen = false : this.drawerOpen = true
    }
  },
  data () {
    return {
      drawerOpen: true,
      rightDrawerList: ['Submit Content', 'Choose Questions', 'Review', 'Get Question Ideas'],
      headerElements: [
        {
          title: 'Invite A Friend',
          icon: 'account_box'
        },
        {
          title: 'School',
          icon: 'bluetooth'
        },
        {
          title: 'Students',
          icon: 'bluetooth'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.padd {
  padding: 40px;
}
.paddR{
  padding: 0px 0px 0px 10px;
}
.paddLr {
  padding: 0px 35px;
}
</style>
