<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/04</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>Dockerの勉強した</strong>
                    <div class="text-caption">
                        書籍: 自宅で始めるDocker入門
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://www.amazon.co.jp/%E8%87%AA%E5%AE%85%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BDocker%E5%85%A5%E9%96%80%E2%80%95%E4%BA%BA%E6%B0%97%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E5%9E%8B%E3%80%8C%E4%BB%AE%E6%83%B3%E5%8C%96%E3%82%BD%E3%83%95%E3%83%88%E3%80%8D%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B-I%E3%83%BB-BOOKS-%E6%B5%85%E5%B1%85-%E5%B0%9A/dp/4777520722/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=docker%E8%87%AA%E5%AE%85&qid=1623664811&sr=8-1'
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
