<template>
    <v-timeline dense>
        <v-timeline-item icon="mdi-account-voice" color='#208ea3'>
            <Card003/>
        </v-timeline-item>
        <v-timeline-item>
            <template v-slot:opposite>
                <span>逆サイド</span>
            </template> 
            <Card002/>
        </v-timeline-item>
        <v-timeline-item>
            <Card001/>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    import Card001 from './cards/Card001';
    import Card002 from './cards/Card002';
    import Card003 from './cards/Card003';
    export default {
            name: 'App',
            components: {
                    Card001,
                    Card002,
                    Card003,
                }
        };
</script>
