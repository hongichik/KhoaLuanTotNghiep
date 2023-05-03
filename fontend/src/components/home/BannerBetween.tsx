import Image from "next/image";

const BannerBetween = () => {
    return (
        <div className="container ">
            <div className="py-3 px-2 bg-sky-500 flex flex-wrap justify-around flex-col xl:flex-row">
                <Image src='/logo/seo-1.svg' alt="seo" className="xl:h-32 p-1 xl:w-auto w-full md:w-7/12 m-auto" width={418} height={123} />
                <Image src='/logo/seo-2.svg' alt="seo" className="xl:h-32 p-1 xl:w-auto w-full md:w-7/12 m-auto" width={418} height={123} />
                <Image src='/logo/seo-3.svg' alt="seo" className="xl:h-32 p-1 xl:w-auto w-full md:w-7/12 m-auto" width={418} height={123} />
            </div>

        </div>
    )
}

export default BannerBetween;