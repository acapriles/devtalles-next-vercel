import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


const HomePage = () => {
	return (
		<MainLayout>
			<h1>Home page</h1>

			<h1 className="title">
				Ir a <Link href='/about'>About</Link>
			</h1>

			<p className="description">
				Get started
				<code className="code"> pages/home.jsx </code>
			</p>
		</MainLayout>
	)
}


export default HomePage;