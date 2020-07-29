<template>
    <div class="col-sm-7 card" style="margin-top:10px">
        <div class="card-body">
            <h3>{{$t('common.profile')}}</h3>
            <div class="float-right">
                <font-awesome-icon style="font-size: 76px;" :icon="['fas', 'user-circle']"/>
            </div>
            <div class="clearfix"></div>
            <br>
            <div class="list-group block">
                <div class="list-group-item" style="width:100%">
                    <div class="label text-muted"><strong>{{$t('user.name')}}</strong></div>
                    <span v-show="user">{{user.name}}</span>
                </div>
                <div class="list-group-item">
                    <div class="label text-muted"><strong>{{$t('user.email')}}</strong></div>
                    <span v-show="user">{{user.email}}</span>
                </div>
                <div class="list-group-item">
                    <div class="label text-muted"><strong>{{$t('user.dob')}}</strong></div>
                    <span v-show="user">{{user.dob}}</span>
                </div>
                <div class="list-group-item">
                    <div class="label text-muted"><strong>{{$t('user.gender')}}</strong></div>
                    <span v-show="user">{{user.gender == 'm' ? $t('user.male') : $t('user.female')}}</span>
                </div>
              
            </div>
        </div>
        <div class="card-footer text-right">
          <button class="btn btn-info" @click="onChangePassword()">
                    <font-awesome-icon :icon="['fa', 'key']"/>
                  {{$t('common.change_password')}}
                </button>
             
            <router-link class="btn btn-primary" to="/admin/edit-profile">
                <font-awesome-icon :icon="['fa', 'edit']"/> {{$t('common.btn_edit')}}
            </router-link>
        </div>
        <FormModal  :visibility="showPasswordFormModal" 
                    :modalTitle="$t('modal.title_change_password')" 
                    @onClickSave="save()" 
                    @onCloseModal="onCloseModal()"> 
            <form  data-vv-scope="changePasswordForm">
              <CRow>
                <CCol sm="6" >
                        <div class="form-group">
                                <label for="oldPassword">{{$t('common.old_password')}}</label>
                            <input type="password" class="form-control" data-vv-name="OldPassword" data-vv-scope="changePasswordForm" name="password" v-model="oldPassword" :state="validateState('oldPassword')"  
                            v-validate="'required|min:8'">
                            <span class="text-danger" v-show="veeErrors.has('changePasswordForm.oldPassword')">{{$t('validation.invalid_password')}}</span>
                            <span v-if="oldPasswordError"  v-text="oldPasswordError" class="text-danger"></span>
                        </div>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="6" >
                        <div class="form-group">
                            <label for="">{{ $t('user.new_password') }}</label>
                            <input type="password" class="form-control" data-vv-name="password" data-vv-scope="changePasswordForm" name="password" v-model="password" :state="validateState('password')"  
                            v-validate="{ 'is': confimrPassword, 'required': true }">
                            <span class="text-danger" v-show="veeErrors.has('changePasswordForm.password')">{{$t('validation.invalid_password')}}</span>
                        </div>
                    </CCol>
                    <CCol sm="6">
                        <div class="form-group">
                            <label for="">{{ $t('user.confirm_new_password') }}</label>
                            <input type="password" class="form-control" data-vv-scope="changePasswordForm" name="confirmPassword" v-model="confimrPassword" v-validate="'required|min:8'"/>
                            <small class="text-danger">{{ veeErrors.first('changePasswordForm.confimrPassword') }}</small>
                        </div>
                    </CCol>
              </CRow>
            </form>
        </FormModal>
    </div>
  
</template>
<style scoped>
    .list-group-item .label {
        width: 35%;
        display: grid;
    }
    .list-group-item span {
        width: 65%;
        display: grid;
    }
</style>
<script>
    import Vue from 'vue';
    import { CEmitRootEvent, CTooltip, CCol, CRow, CCard, CCardBody, CCardFooter, CCardHeader } from '@coreui/vue';
    import FormModal from '../Modals/FormModal';
    import { library } from '@fortawesome/fontawesome-svg-core';
    export default {
        data() {
            return {
                password: '',
                confimrPassword: '',
                oldPassword: '',
                showPasswordFormModal: false,
                user: {},
                oldPasswordError: ''
            }
        },
        mounted() {
            this.$chttp.get('/api/profile').then(result => {
                this.user = result.data.data;
            });
        },
        components: {
            FormModal, CCol, CRow, CCard, CCardBody, CCardFooter, CCardHeader
        },
        methods: {
             save() {
                 const BAD_REQUEST = 400;

                this.$validator.validateAll('changePasswordForm').then(result => {
                    if (!result) {
                        return;
                    };
                    let password = {
                        oldPassword: this.oldPassword,
                        password: this.password,
                        password_confirmation: this.confimrPassword
                    };
                    this.$chttp.post('/api/change-password', password).then(res => {
                        this.onCloseModal();
                    }).catch(e => {
                            if (e.response.data.error.code == BAD_REQUEST) {
                                this.oldPasswordError = this.$t('validation.incorrect_old_password');
                            }
                        });
                    });
            },
            onCloseModal() {
                this.showPasswordFormModal = false;
                this.password = "";
                this.oldPassword = "";
                this.confimrPassword = "";
                this.oldPasswordError = "";
                this.$validator.reset();
            },
            onChangePassword() {
                this.showPasswordFormModal = true;
            }
        }
    }
</script>
