
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'


let posts = [
    {
        id: 1,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 2,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 3,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 4,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 5,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 6,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 7,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 8,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    },
    {
        id: 9,
        name: 'Perrito',
        image: 'Brand Name',
        characteristics: 'sociable'
    }
];




const Slider = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            '(min-width: 500px)': {
                slides: { perView: 2, spacing: 5 },
            },
            '(min-width: 1000px)': {
                slides: { perView: 4, spacing: 10 },
            },
        },
        


        loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
    )





    return (
        <div className='  mx-4 mt-4'>


            <div ref={sliderRef} className='keen-slider mb-5 container'


            >
                {posts && posts.length > 0
                    ? posts.map((post) => {
                        return (
                            <div 


                                key={post.id}
                            >
                                <div className='card post keen-slider__slide'  >



                                    <img className='card-img-top img-fluid' 
                                        src='https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*'
                                        alt={post.name}
                                        title={post.name}
                                    />
                                    <div className='card-title ms-3 mt-3'>

                                        <h5 >{post.name}</h5>
                                        <p >
                                            {post.characteristics}
                                        </p>
                                    </div>



                                </div>
                            </div>
                        );
                    })
                    : ''}
            </div>

        </div>

    );
};
export default Slider;

