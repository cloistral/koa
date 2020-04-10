<template>
    <div class="login-body">
        <a-form :form="form">
            <a-form-item label="用户名">
                <a-input v-decorator="['username',{ rules: [{ required: true, message: '请输入用户名' }] }]"
                         placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item label="密码">
                <a-input v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' }]}]"
                         type="password"
                         placeholder="请输入密码" />
            </a-form-item>

            <a-form-item >
                <a-button type="primary"
                          @click="check">
                    确认
                </a-button>
            </a-form-item>
        </a-form>
    </div>

</template>

<script>


export default {
    data() {
        return {
            checkNick: false,
            form: this.$form.createForm(this,{ name: 'dynamic_rule' }),
        };
    },
    methods: {
        check() {
            this.form.validateFields((err,values) => {
                if(!err) {
                    this.$http.post('/api/login',values)
                        .then(res => {
                            
                    })
                }
            });
        },
       
    },
};
</script>
<style scoped>
.login-body {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px;
    width: 400px;
    height: 400px;
}
</style>
