import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'


const AboutPage = () => {
	return (
		<>
			<h1>About page</h1>
			<h1 className="title">
				Ir a <Link href='/'>Home</Link>
			</h1>

			<p className="description">
				Get started
				<code className="code"> pages/about.jsx </code>
			</p>
		</>
		
	)
}

AboutPage.getLayout = function getLayout( page ) {
	return (
		<MainLayout>
			<DarkLayout>
				{ page }
			</DarkLayout>
		</MainLayout>
	)
}

export default AboutPage;


