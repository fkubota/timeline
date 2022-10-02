<template>
    <v-hover>
    <v-timeline-item icon="mdi-party-popper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                  <strong class='contents-title'>{{ date_ }}</strong>
                </v-col>
                <v-col>
                  <h2 class='contents-title'>{{ title }}</h2>
                    <div class="text-caption">
                      {{ body }}
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            :href='link'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                  <Tweet :options="{width: 200}" :id='tweet_id'></Tweet>
                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
  import { Tweet  } from 'vue-tweet-embed'
  export default {
      components: {
          Tweet
        },
    data () {
        return {

            date_: '2022/07/13',
            title: '29歳になってしまいました。',
            body: '最近30歳がちかずく音が大きくなってきました。10代、20代同様、ニコニコ過ごせるようにがんばります。',
            link: 'https://twitter.com/fkubota_/status/1491344319319797766',
            tweet_id: '1491344319319797766'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

