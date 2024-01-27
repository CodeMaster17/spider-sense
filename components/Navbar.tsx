import Image from 'next/image'
import Link from 'next/link'
import { IconSearch } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';



const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="nav">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/spider.png"
                        width={27}
                        height={27}
                        alt="logo"
                    />

                    <p className="nav-logo">
                        Spider<span className='text-primary'>Sense</span>
                    </p>
                </Link>

                <div className="flex items-center gap-5">
                    <IconSearch size={24} />
                    <IconHeart size={24} />
                    <IconUser size={24} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar