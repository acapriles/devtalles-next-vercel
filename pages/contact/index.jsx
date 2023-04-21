import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const ContactPage = () => {
	return (
		<MainLayout>
			<h1>Contact page</h1>
			<h1 className="title">
				{/* Ir a <a href='/' >Home</a> */}
				Ir a <Link href='/'>Home</Link>
			</h1>

			<p className="description">
				Get started
				<code className="code"> pages/contact.jsx </code>
			</p>
		</MainLayout>
	)
}


export default ContactPage;