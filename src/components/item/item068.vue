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
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
  export default {
      components: {
        },
    data () {
        return {

            date_: '2022/02/01',
            title: 'カンムに入社して1年が経ちました',
            body: 'この1年間、足りないところが無限に見つかる日々でした。これは一生続くのかもしれないですが、目の前のことを倒しまくろうと思います。',
            link: 'https://kanmu.co.jp/',

          }
      }
    }

</script>

<style>
@import "./../../css/mycss.css";
</style>

