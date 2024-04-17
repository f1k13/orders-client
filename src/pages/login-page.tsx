import {AuthLayout} from '@/app/layouts';
import {LoginForm} from '@/widgets/login-form/ui';

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;
