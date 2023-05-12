import Layout from '@/layouts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ComposentRegister from '@/components/auth/register';
import ComposentLogin from '@/components/auth/login';

const Login = () => {
    const router = useRouter();
    const { auth } = router.query;
    return (
        <div className='flex min-h-screen'>
            <div className='m-auto mt-32 mb-32 flex flex-col'>
                <div className='bg-neutral-200 rounded-lg p-1 flex' >
                    <Link href={'/auth/login'} className={`rounded-lg py-2 md:px-20 sm:px-14 px-9 ${(auth === 'login') ? 'bg-white' : ''}`}>
                        Đăng nhập
                    </Link>
                    <Link href={'/auth/register'} className={`rounded-lg py-2 md:px-20 sm:px-14 px-9 ${(auth === 'register') ? 'bg-white' : ''}`}>
                        Đăng ký
                    </Link>
                </div>
                <div className='flex pt-10 w-full'>
                    {
                        (auth === 'login') ? <ComposentLogin /> : <ComposentRegister />
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;