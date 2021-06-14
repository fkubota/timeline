<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/02</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>ベイズ統計の勉強(2ヶ月ぐらい)</strong>
                    <div class="text-caption">
                        [書籍]<br>
                        - Pythonによるベイズ統計モデリング<br>
                        - 基礎からのベイズ統計学
                        - Pythonで体験するベイズ推論
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
