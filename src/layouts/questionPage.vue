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
    <!-- drawer content -->
    </q-drawer>
    <!-- Page Body -->
    <q-page-container>
      <div class="row padd">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <q-input borderless hide-bottom-space placeholder="Enter Text" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-toggle size="lg" value="['abc', 'cde']" val="lg" label="Express Mode" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-btn-dropdown color="primary" label="Dropdown Button">
            <q-list>
              <DropdownItem
                v-for="title in dropDowntitles"
                :key="title"
                :name="title"
                :bind="title"
              />
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <!-- Type Something Section -->
      <div class="row paddLr">
        <div class="col-12">
           <q-input
          placeholder="Enter text"
          hide-bottom-space
          borderless
          autogrow
          clearable
          :disable="disableTextField"
          v-model="ipText"
          @clear="clearText()"
          type="textarea"
          />
        </div>
      </div>
    </q-page-container>
      <q-footer elevated container style="height:130px">
       <q-toolbar>
        <q-toolbar-title class="padd text-weight-thin">
        Word Count : {{ wordCount }}
        <br>
        (Between 0 to {{ maxWordcount }} words)
        </q-toolbar-title>
        <div class="row paddLr">
          <div class="col-md-8 col-xs-12"><q-btn color="orange" label="Try Sample Text" /></div>
          <div class="col-md-4 col-xs-12"><q-btn color="orange" label="Proceed" /></div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import DropdownItem from 'components/dropDownmain.vue'
import HeaderElement from 'components/headerElement.vue'

export default {
  components: {
    DropdownItem,
    HeaderElement
  },
  methods: {
    showNotif () {
      console.log('notified')
      this.$q.notify({
        message: 'Word limit reached',
        type: 'negative'
      })
    },
    toggleDrawer () {
      this.drawerOpen ? this.drawerOpen = false : this.drawerOpen = true
    },
    clearText () {
      this.wordCount = 0
    }
  },
  watch: {
    ipText () {
      this.wordCount = this.ipText.length
      if (this.wordCount >= this.maxWordcount) {
        this.disableTextField = true
        this.showNotif()
      }
    }
  },
  data () {
    return {
      wordCount: 0,
      disableTextField: false,
      maxWordcount: 10,
      ipText: '',
      drawerOpen: true,
      dropDowntitles: ['History', 'Geography', 'Natural Science', 'Technology'],
      headerElements: [
        {
          title: 'Invite A Friend',
          icon: 'bluetooth'
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
