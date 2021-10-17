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

            date_: '2021/10/11',
            title: '「ググるのをやめるとプログラムの生産性が上がるかもしれない」という記事を読んだ',
            body: '非常に気に入ったのでメモ。「定義での理解と、例での理解」など、アメリカや日本の強いひとの理解の仕方とそうでない人の違いについての書簡が書かれている。刺さる内容で定期的に見直したい。',
            link: '1447234870623698947',
            tweet_id: '1447234870623698947'

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

