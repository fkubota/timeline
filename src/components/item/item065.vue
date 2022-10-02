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

            date_: '2021/11/19',
            title: 'ビール検定2級に合格',
            body: 'びあけんとも呼ばれる資格に合格した。3級を飛ばしての挑戦だったがなんとか合格。とにかく勉強が楽しかった。',
            link: 'https://beerken.jp/',
            tweet_id: '1461547316540706816'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>


