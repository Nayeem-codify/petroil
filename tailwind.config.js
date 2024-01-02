tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                headerbg: '#282828',
                redbg: '#F40404',
            },
            maxWidth: {
                'container': '1160px',
            },
            fontFamily: {
                'poppines': "'Poppins', sans-serif",
            },
             backgroundImage: {
                 'banner': "linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)),url('images/banner.jpg')",
            },  
                colors: {
                black: "#282828",
                white: "rgba(255, 255, 255, 50)",
                red: "#F40404",
                text_color: "#000",
                halfwhite: "rgba(240, 240, 240, 50)",
                Transparent: "rgba(255, 255, 255, 0.50);",
                dark_black: "rgba(40, 40, 40, 50)",
            },
            screens: {
                xs: "320px",
                sm: "576px",
                md: "768px",
                lg: "980px",
                xl: "1200px",
                xxl: "1920px",
            },
        }
    }
}