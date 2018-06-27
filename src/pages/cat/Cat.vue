<template>
    <div class="wrapper">
    <mt-index-list :show-indicator="noIndex">
        <mt-index-section index="Fragrance">
            <mt-cell title="Combined "></mt-cell>
            <mt-cell title="CPCD"></mt-cell>
            <mt-cell title="Dior Homme"></mt-cell>
            <mt-cell title="Miss Dior"></mt-cell>
            <mt-cell title="J`Adore"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Make-Up">
            <mt-cell title="Addict Make-up"></mt-cell>
            <mt-cell title="Backstage "></mt-cell>
            <mt-cell title="Capture Totale Make-up "></mt-cell>
            <mt-cell title="Diorific"></mt-cell>
            <mt-cell title="Diorshow"></mt-cell>
            <mt-cell title="Diorskin"></mt-cell>
            <mt-cell title="Prestige"></mt-cell>
            <mt-cell title="Rouge Dior"></mt-cell>
            <mt-cell title="Snow Make-up"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Skincare">
            <mt-cell title="Capture Totale "></mt-cell>
            <mt-cell title="Cleanser"></mt-cell>
            <mt-cell title="Dior Snow"></mt-cell>
            <mt-cell title="Hydralife"></mt-cell>
            <mt-cell title="L'or de vie"></mt-cell>
            <mt-cell title="One Essential"></mt-cell>
            <mt-cell title="Prestige"></mt-cell>
            <mt-cell title="Prestige White"></mt-cell>
        </mt-index-section>
    </mt-index-list>
    </div>
</template>

<script>
    import {
        mapMutations
    } from "vuex";
    
    export default {
        data() {
            return {
                noIndex: false,
            };
        },
        async beforeMount() {},
        mounted() {},
        components: {},
        computed: {},
        methods: {},
        watch: {}
    };
</script>

<style scoped>
    .wrapper{
        text-align: left;
        width: 100%;
    }
    .wrapper .mint-indexlist-nav{
        display: none;
    }
</style>
