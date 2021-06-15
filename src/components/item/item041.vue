<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/05/20</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事] 「新しい環境にdotfilesをワンライナーで反映させる」を公開しました</strong>
                    <div class="text-caption">
                        カンムテックブログデビュー。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://tech.kanmu.co.jp/entry/2021/05/20/134419'
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

