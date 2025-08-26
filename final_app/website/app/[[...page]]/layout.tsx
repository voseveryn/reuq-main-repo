type PageProps ={
    params: Promise<{page?: Array<string>}>
}

export default async function RootLayout(props: PageProps) {
    const params = await props.params

    return(
        <html>
            <body>
                čau
            </body>
        </html>
    )
    
}