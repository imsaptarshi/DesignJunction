// log the pageview with their URL
export const pageview = (url: String) => {
    window.gtag("config", String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS), {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }: any) => {
    window.gtag('event', action, params)
}