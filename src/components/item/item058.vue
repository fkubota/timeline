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

            date_: '2021/09/05',
            title: '[記事]まるで自分だけの小さなインターネット、オレオレブックマーク管理術',
            body: 'fkubota流のブックマーク管理術についての記事。マニアックな記事だけど評判良くて驚いた。',
            link: 'https://qiita.com/fkubota/items/cc46d58d853287b8e98e',
            tweet_id: '1434372769307774976'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

