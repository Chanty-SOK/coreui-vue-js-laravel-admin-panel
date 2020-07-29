<template>
    <CModal :title="$t('common.delete_header_title')"
            :closeOnBackdrop="false"
            color="danger" size="lg" :show.sync="visibility">
        <p>{{ $t('common.delete_confirmation_message') }}</p>
        <template #footer-wrapper #show_details="{item, index}">
            <div class="modal-footer">
                <button type="button" @click="$emit('onCloseModal')" class="btn btn-secondary">
                    {{ $t("common.btn_cancel") }}
                    <CIcon name="cil-x"></CIcon>
                </button>
                <button type="submit" class="btn btn-danger" @click="$emit('onClickRemove')">
                    {{ $t('common.btn_save') }}
                    <CIcon name="cil-save"></CIcon>
                </button>
            </div>
        </template>
    </CModal>
</template>


<script>
    import {CButton, CIcon, CModal} from '@coreui/vue';

    export default {
        name: "ModalDelete",
        components: {CIcon, CModal, CButton},
        props: ['visibility'],
        data() {
            return {}
        }
    }
</script>
