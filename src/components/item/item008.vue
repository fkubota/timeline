<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/01</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>量子コンピュータの勉強を開始</strong>
                    <div class="text-caption">
                        書籍: 量子情報科学入門 <br>

                    connpassで開催されていた勉強会に参加
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="https://liberal-arts-for-tech.connpass.com/event/113694/"
                            >
                            Learn More
                    </v-btn>
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
