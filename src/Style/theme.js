import backgroundLight from '../static/images/bg-desktop-light.jpg' 
import backgroundLightMobile from '../static/images/bg-mobile-light.jpg'
import backgroundDark from '../static/images/bg-desktop-dark.jpg' 
import backgroundDarkMobile from '../static/images/bg-mobile-dark.jpg'

export const light = {
    title: "light",

    backgroundImage: backgroundLight,
    backgroundImageMobile: backgroundLightMobile,
    backgroundColor: '#fafafa',
    colors: {
        primary: '#fff',
        text: '#333'
    }
}

export const dark = {
    title: "dark",

    backgroundImage: backgroundDark,
    backgroundImageMobile: backgroundDarkMobile,
    backgroundColor: '#181824',
    colors: {
        primary: '#25273c',
        text: '#bfc2e7'
    }
}