<template>
    <CModal size="lg" color="" :show.sync="visibility" :closeOnBackdrop="false">
        <template #header>
            <h4>{{ modalTitle }}</h4>
            <button type="button" class="close" @click="$emit('onCloseModal')" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <slot></slot>
        <template #footer-wrapper>
            <div class="modal-footer">
                <button type="button" @click="$emit('onCloseModal')" class="btn btn-danger">
                    {{ $t("common.btn_close") }} <CIcon :size="`sm`" name="cil-remove"/>
                </button>
                <button v-show="getEditBtnConfigure" type="button" class="btn btn-primary" @click="$emit('onEditModal', id, modalTitle)">
                    {{ $t('common.btn_edit') }} <CIcon name="cil-pencil" :size="`sm`"/>
                </button>
            </div>
        </template>
    </CModal>
</template>

<script>
    import { CModal, CIcon, CButton } from '@coreui/vue';
    export default {
        name: "ModalDetail",
        props: {
            'visibility' : Boolean,
            'modalTitle' : String, 
            'id': String, 
            'editBtn': {
                type: Boolean,
                default: true
            },
        },
        components: {
            CModal, CIcon, CButton
        },
         computed: {
            getEditBtnConfigure() {
                if (this.editBtn) {
                    return true;
                }
                return false;
            }
        },
    }
</script>

<style scoped>

</style>
