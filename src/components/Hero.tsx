import { Car, Key, Tag, Wrench } from 'lucide-react';
import heroImage from '../assets/images/heroimg.png';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
                <div className="max-w-xl">
                    <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                        Your whole car journey, in one marketplace.
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-black font-light sm:text-lg">
                        Browse verified listings, rent for the weekend, or track down the
                        exact part your car needs. Buying, selling and renting handled all
                        in one place.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#shop"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            Browse Cars
                        </a>
                        <a
                            href="#sell"
                            className="text-sm font-semibold text-black px-6 py-3.5 border rounded-lg hover:text-brand hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            Buy Parts
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 pt-6">
                        <a href="#buy" className="flex items-center gap-2 text-sm font-medium text-black transition hover:text-brand">
                            <Car className="h-4 w-4 text-black" />
                            Buy
                        </a>
                        <a href="#rent" className="flex items-center gap-2 text-sm font-medium text-black transition hover:text-brand">
                            <Key className="h-4 w-4 text-black" />
                            Rent
                        </a>
                        <a href="#sell" className="flex items-center gap-2 text-sm font-medium text-black transition hover:text-brand">
                            <Tag className="h-4 w-4 text-black" />
                            Sell
                        </a>
                        <a href="#parts" className="flex items-center gap-2 text-sm font-medium text-black transition hover:text-brand">
                            <Wrench className="h-4 w-4 text-black" />
                            Spare parts
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md lg:max-w-none">
                    <img
                        src={heroImage}
                        alt="Featured vehicle listed on the marketplace"
                        loading="lazy"
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;