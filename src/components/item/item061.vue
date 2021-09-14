<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                  <strong class='contents-title'>{{ date_ }}</strong>
                </v-col>
                <v-col>
                  <strong class='contents-title'>{{ title }}</strong>
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

            date_: '2021/09/13',
            title: '[記事] カンム流『朝会』をやってみたら予想以上にウケが良かった件',
            body: 'カンムテックブログ。雑談朝会について書いた。リモートで雑談減ったよねってチームに読んでほしい。',
            link: 'https://tech.kanmu.co.jp/entry/2021/09/13/180901',
            tweet_id: '1437343219168153611'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

