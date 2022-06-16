export default function sortResources(data: Array<any>) {
    let a: any = []
    let b: any = []
    let c: any = []
    let d: any = []

    data.forEach((data) => {
        if (data.isAdvertised && data.isFeatured) {
            a.push(data)
        } else if (data.isAdvertised && !data.isFeatured) {
            b.push(data)
        } else if (data.isFeatured && !data.isAdvertised) {
            c.push(data)
        } else {
            d.push(data)
        }
    })

    return [...a, ...b, ...c, ...d]
}