import Layout from '@/layouts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ComposentLogin from '@/components/auth/login';
import ComposentRegister from '@/components/auth/register';

const Login = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <Layout>
            <div className='flex min-h-screen'>
                <div className='m-auto mt-32 flex flex-col'>
                    <div className='bg-neutral-200 rounded-lg p-1 flex' >
                        <Link href={'/auth/login'} className={`rounded-lg py-2 md:px-20 sm:px-14 px-9 ${(name === 'login') ? 'bg-white' : ''}`}>
                            Đăng nhập
                        </Link>
                        <Link href={'/auth/register'} className={`rounded-lg py-2 md:px-20 sm:px-14 px-9 ${(name === 'register') ? 'bg-white' : ''}`}>
                            Đăng ký
                        </Link>
                    </div>
                    <div className='flex pt-10 w-full'>
                        {
                            (name === 'login') ? <ComposentLogin /> : <ComposentRegister />
                        }
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Login;