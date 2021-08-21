<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title justify='center'>fkubota's Timeline</v-toolbar-title>
      <v-img 
           src='./../images/icon.png'
           max-height="50"
           max-width="50"
           contain
        >
      </v-img>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://fkubota.github.io/bookshelf/' v-bind="attrs" v-on="on">
                  <v-icon>mdi-bookshelf</v-icon>
              </v-btn>
          </template>
          <span>bookshelf</span>
      </v-tooltip>
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
                    <font-awesome-icon :icon="[ 'fab', 'kaggle' ]" />
              </v-btn>
          </template>
          <span>Kaggle</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://speakerdeck.com/fkubota' v-bind="attrs" v-on="on">
                    <font-awesome-icon :icon="[ 'fab', 'speaker-deck' ]" />
              </v-btn>
          </template>
          <span>Speaker Deck</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/fkubota/timeline' v-bind="attrs" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
              </v-btn>
          </template>
          <span>Source Code</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
    <v-container>
    <v-timeline align-top dense class="mx-auto" >

            <item056/>
            <item055/>
            <item054/>
            <item053/>
            <item052/>
            <item051/>
            <item049/>
            <item047/>
            <item048/>
            <item046/>
            <item045/>
            <item044/>
            <item043/>
            <item039/>
            <item042/>
            <item041/>
            <item038/>
            <item031/>
            <item036/>
            <item029/>
            <item032/>
            <item037/>
            <item034/>
            <item033/>
            <item035/>
            <item028/>
            <item027/>
            <item026/>
            <item025/>
            <item024/>
            <item021/>
            <item019/>
            <item023/>
            <item013/>
            <item014/>
            <item022/>
            <item016/>
            <item018/>
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
    import item018 from './item/item018';
    import item019 from './item/item019';
    import item021 from './item/item021';
    import item022 from './item/item022';
    import item023 from './item/item023';
    import item024 from './item/item024';
    import item025 from './item/item025';
    import item026 from './item/item026';
    import item027 from './item/item027';
    import item028 from './item/item028';
    import item029 from './item/item029';
    import item031 from './item/item031';
    import item032 from './item/item032';
    import item033 from './item/item033';
    import item034 from './item/item034';
    import item035 from './item/item035';
    import item036 from './item/item036';
    import item037 from './item/item037';
    import item038 from './item/item038';
    import item039 from './item/item039';
    import item041 from './item/item041';
    import item042 from './item/item042';
    import item043 from './item/item043';
    import item044 from './item/item044';
    import item045 from './item/item045';
    import item046 from './item/item046';
    import item047 from './item/item047';
    import item048 from './item/item048';
    import item049 from './item/item049';
    import item051 from './item/item051';
    import item052 from './item/item052';
    import item053 from './item/item053';
    import item054 from './item/item054';
    import item055 from './item/item055';
    import item056 from './item/item056';

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
                    item018,
                    item019,
                    item021,
                    item022,
                    item023,
                    item024,
                    item025,
                    item026,
                    item027,
                    item028,
                    item029,
                    item031,
                    item032,
                    item033,
                    item034,
                    item035,
                    item036,
                    item037,
                    item038,
                    item039,
                    item041,
                    item042,
                    item043,
                    item044,
                    item045,
                    item046,
                    item047,
                    item048,
                    item049,
                    item051,
                    item052,
                    item053,
                    item054,
                    item055,
                    item056,

                },
        };
</script>
