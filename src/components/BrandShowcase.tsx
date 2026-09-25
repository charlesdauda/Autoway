import porscheLogo from '../assets/images/porche.png';
import bmwLogo from '../assets/images/bmw.png';
import cadillacLogo from '../assets/images/cardilac.png';
import mercedesLogo from '../assets/images/merc.png';
import hyundaiLogo from '../assets/images/hyundai.png';
import chevLogo from '../assets/images/chev.png';
import fordLogo from '../assets/images/ford.png';

const brands = [
    { name: 'Cadillac', image: cadillacLogo },
    { name: 'Tesla', image: fordLogo },
    { name: 'Mercedes-Benz', image: mercedesLogo },
    { name: 'BMW', image: bmwLogo },
    { name: 'Hyundai', image: hyundaiLogo },
    { name: 'Range Rover', image: chevLogo },
    { name: 'Porsche', image: porscheLogo },
];

const BrandShowcase = () => {
    return (
        <section className="relative z-10 -mt-25 bg-white px-8 pb-14 pt-6" aria-label="Available vehicle brands">
            <div className="mx-auto grid max-w-6xl grid-cols-7 items-center gap-6">
                {brands.map((brand) => (
                    <div key={brand.name} className="flex h-16 items-center justify-center">
                        <img
                            src={brand.image}
                            alt={`${brand.name} logo`}
                            className="h-auto max-h-16 w-full max-w-36 object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandShowcase;