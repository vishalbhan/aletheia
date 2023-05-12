import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "h9iaa4vs",
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-08-31'
})