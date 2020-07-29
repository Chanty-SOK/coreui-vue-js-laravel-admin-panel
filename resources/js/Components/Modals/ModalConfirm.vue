<template>
    <CModal size="lg" color="" :show.sync="visibility" :closeOnBackdrop="false">
        <template #header>
            <h4>{{ modalTitle }}</h4>
            <button type="button" class="close" @click="$emit('onCloseConfirm')" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <slot></slot>
        <template #footer-wrapper #show_details="{item, index}">
            <div class="modal-footer">
                <button type="button" @click="$emit('onCloseConfirm')" class="btn btn-secondary">
                        {{ $t("common.btn_cancel") }} <CIcon name="cil-x" size="sm"/>
                    </button>
                    <button type="button"  :class="{'btn btn-info': isVerified, 'btn btn-danger': !isVerified}" @click="$emit('onClickSave')">
                        <span v-show="isVerified">{{ $t('age_verification.verified') }}<CIcon name="cil-check" size="sm"/></span> 
                        <span v-show="!isVerified">{{ $t('age_verification.rejected') }} <CIcon name="cil-x" size="sm"/></span>
                    </button>
            </div>
        </template>
    </CModal>
</template>

<script>
    import { CModal, CIcon } from '@coreui/vue';
    export default {
        name: "ModalConfirm",
        props: ['visibility','modalTitle', 'isVerified'],
        components: {
            CModal, CIcon
        }
    }
</script>

<style scoped>

</style>
