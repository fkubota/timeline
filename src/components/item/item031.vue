<template>
    <v-hover>
    <v-timeline-item color="#e4e2e2ff" small 
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/02/26</strong>
                </v-col>
                <v-col>
                    <strong class='contents-title'>[記事] オレオレKaggle実験管理</strong>
                    <div class="text-caption">
                        パイプラインのディレクトリ構造とかを紹介。
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://zenn.dev/fkubota/articles/f7efe69fd2044d'
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
