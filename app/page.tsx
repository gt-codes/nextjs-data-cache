import Image from 'next/image';

export default async function Home() {
	const data = await fetch('https://api.github.com/users/leerob').then((res) => res.json());

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Image src={data.avatar_url} alt='lee' width={200} height={200} className='rounded-full' />
			<h1 className='text-5xl font-bold'>Hello, {data.name}!</h1>
			<p className='text-2xl'>{data.company}</p>
		</main>
	);
}
