<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>1993/07/13</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>沖縄で生まれる</strong>
                    <div class="text-caption">
                        1ヶ月ぐらい早く生まれたけど元気だったからヨシだったらしい
                    </div>
                </v-col>
            </v-row>
    </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {}
</script>

<style>
@import "./../../css/mycss.css";
</style>
