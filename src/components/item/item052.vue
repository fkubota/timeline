<template>
    <v-hover>
        <v-timeline-item :icon='icon' color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                  <strong class='contents-title'>{{ date_ }}</strong>
                </v-col>
                <v-col>
                  <h2 class='contents-title'>{{ title }}</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                          {{ body }}

                        </div>
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
                    <v-img src="./../../images/bg014.png" max-width='300' max-height='200' contain> </v-img>
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
            Tweet,
          },
        data () {
            return {
                icon: 'mdi-github',
                date_: '2021/07/21',
                title: '「portfolio」を公開',
                body: 'portfolioをvue+githubpagesで作成。評判はなかなかいい。',
                link: 'https://fkubota.github.io/portfolio/',
                tweet_id: '1417502325917118465',

              }
          },
      }


</script>

<style>
  @import "./../../css/mycss.css";
</style>
