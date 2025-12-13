import stayCategoryCoverImage from '@/images/hero-right-2.png'
import carCategoryCoverImage from '@/images/hero-right-car.png'
import experienceCategoryCoverImage from '@/images/hero-right-experience.png'
import filghtCategoryCoverImage from '@/images/hero-right-flight.png'
import realEstateCategoryCoverImage from '@/images/hero-right-real-estate.png'

// stay categories --------
export async function getStayCategories() {
  return [
    {
      id: 'stay-cat://1',
      name: 'New York, USA',
      region: 'United States',
      handle: 'new-york-usa',
      href: '/stay-categories/new-york-usa',
      count: 5000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://2',
      name: 'Singapore',
      region: 'Singapore',
      handle: 'singapore',
      href: '/stay-categories/singapore',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://3',
      name: 'Paris, France',
      region: 'France',
      handle: 'paris-france',
      href: '/stay-categories/paris-france',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://4',
      name: 'London, UK',
      region: 'United Kingdom',
      handle: 'london-uk',
      href: '/stay-categories/london-uk',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://5',
      name: 'Tokyo, Japan',
      region: 'Japan',
      handle: 'tokyo-japan',
      href: '/stay-categories/tokyo-japan',
      count: 5000,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'stay-cat://6',
      name: 'Maldives',
      region: 'Indian Ocean',
      handle: 'maldives',
      href: '/stay-categories/maldives',
      count: 7500,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'The Maldives, officially the Republic of Maldives',
    },
    {
      id: 'stay-cat://7',
      name: 'Roma, Italy',
      region: 'Italy',
      handle: 'roma-italy',
      href: '/stay-categories/roma-italy',
      count: 8100,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Italy, a European country with a long Mediterranean.',
    },
    {
      id: 'stay-cat://8',
      name: 'Enjoy the great cold',
      region: 'Arctic',
      handle: 'enjoy-the-great-cold',
      href: '/stay-categories/enjoy-the-great-cold',
      count: 15600,
      thumbnail: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'The Arctic is the northernmost region of Earth.',
    },
    {
      id: 'stay-cat://9',
      name: 'Sleep in a floating way',
      region: 'Worldwide',
      handle: 'sleep-in-a-floating-way',
      href: '/stay-categories/sleep-in-a-floating-way',
      count: 1000,
      thumbnail: 'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'A floating hotel is a type of hotel.',
    },
    {
      id: 'stay-cat://10',
      name: "In the billionaire's house",
      region: 'Worldwide',
      handle: 'in-the-billionaires-house',
      href: '/stay-categories/in-the-billionaires-house',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: "A billionaire's house.",
    },
    {
      id: 'stay-cat://11',
      name: 'Cool in the deep forest',
      region: 'Worldwide',
      handle: 'cool-in-the-deep-forest',
      href: '/stay-categories/cool-in-the-deep-forest',
      count: 6000,
      thumbnail: 'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Cool in the deep forest.',
    },
    {
      id: 'stay-cat://12',
      name: 'Sunset in the desert',
      region: 'Worldwide',
      handle: 'sunset-in-the-desert',
      href: '/stay-categories/sunset-in-the-desert',
      count: 1000,
      thumbnail:
        'https://images.pexels.com/photos/32223288/pexels-photo-32223288/free-photo-of-ngoi-nha-da-d-a-trung-h-i-quy-n-ru-v-i-di-m-nh-n-mau-vang.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Sunset in the desert.',
    },
  ]
}
export async function getStayCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'stay://all',
      name: 'Explore stays',
      handle: 'all',
      href: '/stay-categories/all',
      region: 'Worldwide',
      count: 144000,
      description: 'Explore all stays around the world',
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
    }
  }

  // get all categories
  const categories = await getStayCategories()
  return categories.find((category) => category.handle === handle)
}



// Real-Estate categories --------
export async function getRealEstateCategories() {
  return [
    {
      id: 'real-estate://1',
      name: 'New York, USA',
      handle: 'new-york',
      href: '/real-estate-categories/new-york',
      count: 144000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'real-estate://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/real-estate-categories/singapore',
      count: 188288,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
    {
      id: 'real-estate://3',
      name: 'Paris, France',
      handle: 'paris',
      href: '/real-estate-categories/paris',
      count: 218288,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'France',
    },
    {
      id: 'real-estate://4',
      name: 'London, UK',
      handle: 'london',
      href: '/real-estate-categories/london',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United Kingdom',
    },
    {
      id: 'real-estate://5',
      name: 'Tokyo, Japan',
      handle: 'tokyo',
      href: '/real-estate-categories/tokyo',
      count: 232288,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Japan',
    },
    {
      id: 'real-estate://6',
      name: 'Maldives',
      handle: 'maldives',
      href: '/real-estate-categories/maldives',
      count: 77566,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Indian Ocean',
    },
  ]
}
export async function getRealEstateCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'real-estate://all',
      name: 'Real-estates',
      handle: 'all',
      href: '/real-estate-categories/all',
      count: 20000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all real estates around the world',
    }
  }
  const categories = await getRealEstateCategories()
  return categories.find((category) => category.handle === handle)
}


// types
export type TStayCategory = Awaited<ReturnType<typeof getStayCategories>>[number]
export type TRealEstateCategory = Awaited<ReturnType<typeof getRealEstateCategories>>[number]
export type TCategory = TStayCategory |  TRealEstateCategory 
