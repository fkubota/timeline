<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/12/01</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>MoAビギナー向けの勉強会を開催</strong>
                    <div class="text-caption">
                        cool-rabbitさんに手伝ってもらって楽しくオンラインで勉強会をしました。  
                        人数は20人ぐらい集まってかなり盛り上がりました。
                    </div>
                </v-col>
                <v-col>
                    <Tweet :options="{width: 200}" id='1333624371361976321'></Tweet>
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
                }
        }
</script>

<style>
@import "./../../css/mycss.css";
