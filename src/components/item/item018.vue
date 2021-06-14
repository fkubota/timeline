<template>
    <v-hover>
    <v-timeline-item icon="mdi-play-box" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/12</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>プログラミングをはじめて経験1年が経過したのでスライド作った</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            Title: 「生産性と戦った僕の1年の記録とツールたち」<br>
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://speakerdeck.com/fkubota/sheng-chan-xing-tozhan-tutapu-false1nian-falseji-lu-toturutati'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg011.png" max-width='300' max-height='200' contain> </v-img>
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
