import img1 from '/public/img-1.jpg';
import img2 from '/public/img-2.jpg';
import img3 from '/public/img-3.jpg';
import ImagesSlider from './ImagesSlider';

const Home = (): JSX.Element => {
    const images: string[] = [img1, img2, img3];

    return (
        <div className=' max-w-[1200px] w-full h-[500px]'>
            <ImagesSlider imgUrls={images} />
        </div>
    );
}

export default Home;
