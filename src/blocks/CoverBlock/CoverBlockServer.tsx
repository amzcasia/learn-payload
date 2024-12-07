type CoverBlockServerType = {
    title: string,
    subtitle: string
}

export default function CoverBlockServer({title, subtitle} : CoverBlockServerType){
    return(
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {subtitle}
            </p>
        </div>
    )
}