import Link from 'next/link';
import ThemeAwareLogo from '@/components/ui/logo-image';

export default function NotFound() {
    return (
        <div className="w-screen h-screen">
            <section
                className="min-h-screen w-full flex flex-col justify-center items-center text-left px-4 md:px-10 relative"
            >
                <div className="mb-8">
                    <ThemeAwareLogo />
                </div>
                <div className="flex flex-col gap-2 max-w-full">
                    <h1 className="text-5xl md:text-7xl font-mono font-bold text-center text-chart-1">
                        Error 404
                    </h1>
                    <h1
                        className="text-3xl md:text-5xl font-mono text-foreground font-bold text-center"
                    >
                        Oops! This page <br /> doesn&rsquo;t exist
                    </h1>
                </div>
                <Link href={'/'}
                    className="fixed bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 text-sm sm:text-lg border border-foreground rounded hover:bg-foreground hover:text-background transition z-50 backdrop-blur"
                >
                    Go back to the site ↺
                </Link>
            </section>
        </div>
    );
}