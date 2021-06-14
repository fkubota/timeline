<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title justify='center'>fkubota's Timeline</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://twitter.com/fkubota_' v-bind="attrs" v-on="on">
                  <v-icon>mdi-twitter</v-icon>
              </v-btn>
          </template>
          <span>twitter</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/fkubota' v-bind="attrs" v-on="on">
                  <v-icon>mdi-github</v-icon>
              </v-btn>
          </template>
          <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://www.kaggle.com/fkubota' v-bind="attrs" v-on="on">
                  <v-icon>mdi-alpha-k</v-icon>
              </v-btn>
          </template>
          <span>Kaggle</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
    <v-container>
    <v-timeline align-top dense class="mx-auto" >

            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>

            <item013/>
            <item014/>
            <item016/>
            <item015/>
            <item012/>
            <item011/>
            <item017/>
            <item007/>
            <item008/>
            <item006/>
            <item005/>
            <item004/>
            <item003/>
            <item002/>
            <item001/>
            <item009/>

    </v-timeline>
</v-container>
</v-content>
</v-app>
</template>

<script>
    import item001 from './item/item001';
    import item002 from './item/item002';
    import item003 from './item/item003';
    import item004 from './item/item004';
    import item005 from './item/item005';
    import item006 from './item/item006';
    import item007 from './item/item007';
    import item008 from './item/item008';
    import item009 from './item/item009';
    import item011 from './item/item011';
    import item012 from './item/item012';
    import item013 from './item/item013';
    import item014 from './item/item014';
    import item015 from './item/item015';
    import item016 from './item/item016';
    import item017 from './item/item017';

    import item92 from './item/item92';
    export default {
            name: 'App',
            components: {
                    item001,
                    item002,
                    item003,
                    item004,
                    item005,
                    item006,
                    item007,
                    item008,
                    item009,
                    item011,
                    item012,
                    item013,
                    item014,
                    item015,
                    item016,
                    item017,

                    item92,
                }
        };
</script>
