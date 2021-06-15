<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/05/28</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事] 「Twitterのフォロワーに一様分布を依頼してみた」を公開しました</strong>
                    <div class="text-caption">
                        カンムテックブログ。<br>
                        適合度検定を使ったかんたんな実験をしてみました。
                        
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://tech.kanmu.co.jp/entry/2021/05/28/211334'
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

