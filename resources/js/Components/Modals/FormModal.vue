<template>
    <CModal size="lg" color="" :show.sync="visibility" :closeOnBackdrop="false">
        <template #header>
            <h4>{{ modalTitle }}</h4>
            <button type="button" class="close" @click="$emit('onCloseModal')" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <slot></slot>
        <template #footer-wrapper #show_details="{item, index}">
            <div class="modal-footer">
                <button type="button" @click="$emit('onCloseModal')" class="btn btn-danger">
                    {{ $t("common.btn_close") }} <CIcon :size="`sm`" name="cil-x"/>
                </button>
                <button type="submit" class="btn btn-primary" @click="$emit('onClickSave')">{{ $t('common.btn_save') }}
                    <CIcon :size="`sm`" name="cil-save"/>
                </button>
            </div>
        </template>
    </CModal>
</template>

<script>
    import { CModal, CIcon } from '@coreui/vue';
    export default {
        name: "FormModal",
        props: ['visibility','modalTitle'],
        components: {
            CModal, CIcon
        }
    }
</script>

<style scoped>

</style>
