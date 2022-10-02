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

            date_: '2022/02/04',
            title: '沖縄に移住しました',
            body: '社会人になってからずっと彼女と沖縄との遠距離恋愛をしていましたが、この度同棲するために沖縄に帰りました。暖かすぎるフォロワー達から信じられない量のプレゼントが届きました。沖縄に遊びに来てね。',
            link: 'https://twitter.com/fkubota_/status/1491344319319797766',
            tweet_id: '1491344319319797766'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

