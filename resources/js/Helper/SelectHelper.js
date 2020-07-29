import Vue from 'vue';
export default {
    /**
     * 
     * @param {Array} items 
     * @param {String} labelKey 
     * @param {String} valueKey 
    */
    mapSelect (items, labelKey, valueKey) {
        let result = items.map((item) => {
            return {
                value: item[valueKey],
                label: item[labelKey]
            }
        });
        result.unshift({
            value: null, label: Vue.i18n.translate('common.selectbox_placeholder'), disabled: true
        });
        return result;
    }
}